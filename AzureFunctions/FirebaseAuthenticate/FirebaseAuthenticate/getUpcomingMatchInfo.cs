using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;

namespace FirebaseAuthenticate
{
    public static class getUpcomingMatchInfo
    {
        [FunctionName("getUpcomingMatchInfo")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequestMessage req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");
            var str = "Server=tcp:rlait.database.windows.net,1433;Initial Catalog=RocketLeagueAI;Persist Security Info=False;User ID=cap_admin;Password=qwerty_1234567;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            string increment = req.GetQueryNameValuePairs()
           .FirstOrDefault(q => string.Compare(q.Key, "increment", true) == 0)
           .Value;


            if (increment == null)
            {
                // Get request body
                dynamic data = await req.Content.ReadAsAsync<object>();
                increment = data?.increment;
            }
            int inc = Int32.Parse(increment);

            List<object> result = new List<object>();
            List<string> PIDs = new List<string>();

            string sqlPID = "SELECT PID1, PID2 FROM matchList WHERE matchId = ((SELECT matchId FROM matchList WHERE currentMatch = 1) +" + inc + ");";
            using (SqlConnection connection = new SqlConnection(str))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sqlPID, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                PIDs.Add(reader.GetString(0));
                                PIDs.Add(reader.GetString(1));
                            }
                        }
                    }
                }
            }

            
            int i = 1;
            foreach (string PID in PIDs)
            {
                string sqlMatches = "SELECT COUNT(DISTINCT matchID) FROM matchList WHERE PID1 = '" + PID + "' OR PID2 = '" + PID + "';";
                string sqlWins = "SELECT COUNT(DISTINCT matchID) FROM results WHERE win = 1 AND PID = '" + PID + " ' GROUP BY PID;";
                string sqlName = "SELECT username FROM profile WHERE PID = '" + PID + "';";

                EntryName pidRow = new EntryName();
                pidRow.label = "username";
                pidRow.name = PID;
                result.Add(pidRow);

                using (SqlConnection connection = new SqlConnection(str))
                {
                    connection.Open();
                    using (SqlCommand command = new SqlCommand(sqlMatches, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                while (reader.Read()) 
                                {
                                    Entry row = new Entry();
                                    row.label = "matches P" + i;
                                    row.count = reader.GetInt32(0);
                                    result.Add(row);
                                }
                            } else
                            {
                                Entry row = new Entry();
                                row.label = "matches P" + i;
                                row.count = 0;
                                result.Add(row);
                            }
                        }
                    }

                    using (SqlCommand command = new SqlCommand(sqlWins, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                while (reader.Read())
                                {
                                    Entry row = new Entry();
                                    row.label = "wins P" + i;
                                    row.count = reader.GetInt32(0);
                                    result.Add(row);
                                }
                            }
                            else
                            {
                                Entry row = new Entry();
                                row.label = "wins P" + i;
                                row.count = 0;
                                result.Add(row);
                            }
                        }
                    }

                    using (SqlCommand command = new SqlCommand(sqlName, connection))
                    {
                        using (SqlDataReader reader = command.ExecuteReader())
                        {
                            if (reader.HasRows)
                            {
                                while (reader.Read())
                                {
                                    EntryName row = new EntryName();
                                    row.label = "username";
                                    row.name = reader.GetString(0);
                                    result.Add(row);
                                }
                            }
                        }
                    }
                    connection.Close();  
                }
                i++;
            }

            string json;
            try
            {
                json = JsonConvert.SerializeObject(result, Formatting.Indented);
            } catch (Exception e)
            {
                json = "{}";
            }

            return result == null ?
                req.CreateResponse(HttpStatusCode.BadRequest, "If you are seeing this, something went really, really wrong, please contact the admins") :
                req.CreateResponse(HttpStatusCode.OK, json);
        }
        public class Entry
        {
            public string label
            {
                get;
                set;
            }
            public int count
            {
                get;
                set;
            }
        }

        public class EntryName
        {
            public string label
            {
                get;
                set;
            }
            public string name
            {
                get;
                set;
            }
        }
    }
}
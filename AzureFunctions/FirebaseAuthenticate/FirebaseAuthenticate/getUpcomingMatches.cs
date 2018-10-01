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
    public static class getUpcomingMatches
    {
        [FunctionName("getUpcomingMatches")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequestMessage req, TraceWriter log)
        {
            log.Info("C# HTTP trigger function processed a request.");
            var str = "Server=tcp:rlait.database.windows.net,1433;Initial Catalog=RocketLeagueAI;Persist Security Info=False;User ID=cap_admin;Password=qwerty_1234567;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            List<Entry> result = new List<Entry>();
            List<string> PIDs = new List<string>();

            string sqlPID = "SELECT PID1, PID2 FROM matchList WHERE matchId > (SELECT matchId FROM matchList WHERE currentMatch = 1) ;";
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

            foreach (string PID in PIDs)
            {
                string sqlMatches = "SELECT username FROM profile WHERE PID = '" + PID + "';";
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
                                    Entry row = new Entry("username", reader.GetString(0));
                                    result.Add(row);
                                }
                            }
                        }
                    }
                }

            }

            var json = JsonConvert.SerializeObject(result, Formatting.Indented);

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
            public string username
            {
                get;
                set;
            }
            public Entry(string v1, string v2)
            {
                label = v1;
                username = v2;
            }

           
        }
    }
}

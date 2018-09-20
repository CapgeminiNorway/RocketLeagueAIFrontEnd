using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using Newtonsoft.Json;

namespace FirebaseAuthenticate
{
    public static class getStats
    {
        [FunctionName("getStats")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequestMessage req, TraceWriter log)
        {
            string PID = req.GetQueryNameValuePairs()
           .FirstOrDefault(q => string.Compare(q.Key, "PID", true) == 0)
           .Value;

            if (PID == null)
            {
                // Get request body
                dynamic data = await req.Content.ReadAsAsync<object>();
                PID = data?.PID;
            }

            var str = "Server=tcp:rlait.database.windows.net,1433;Initial Catalog=RocketLeagueAI;Persist Security Info=False;User ID=cap_admin;Password=qwerty_1234567;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            string sqlMatches = "SELECT COUNT(matchID) FROM matchList WHERE PID1 = '" + PID + "' or PID2 = '" + PID + "';";
            string sqlWins = "SELECT Count(winner) FROM results WHERE winner = '" + PID + "';";
            List<Entry> result = new List<Entry>();

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
                                row.label = "matches";
                                row.count = reader.GetInt32(0);
                                result.Add(row);
                            }
                        }
                    }
                }
            }

            using (SqlConnection connection = new SqlConnection(str))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sqlWins, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                Entry row = new Entry();
                                row.label = "wins";
                                row.count = reader.GetInt32(0);
                                result.Add(row);
                            }
                        }
                    }
                }
            }

            var json = JsonConvert.SerializeObject(result, Formatting.Indented);

            return new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StringContent(json, Encoding.UTF8, "application/json")
            };
        }
        public class Entry
        {
            public string label { get; set; }
            public int count { get; set; }
        }
    }
}

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
    public static class getLeaderBoard
    {
        [FunctionName("getLeaderBoard")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequestMessage req, TraceWriter log)
        {

            var str = "Server=tcp:rlait.database.windows.net,1433;Initial Catalog=RocketLeagueAI;Persist Security Info=False;User ID=cap_admin;Password=qwerty_1234567;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            string sql = "SELECT username, Count(winner) FROM results FULL OUTER JOIN profile on winner = PID GROUP BY winner, username ORDER BY COUNT(winner) DESC";
            List<Entry> result = new List<Entry>();

            using (SqlConnection connection = new SqlConnection(str))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.HasRows)
                        {
                            while (reader.Read())
                            {
                                Entry row = new Entry();
                                row.userName = reader.GetString(0);
                                row.count = reader.GetInt32(1);
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
            public string userName { get; set; }
            public int count { get; set; }
        }
    }
}

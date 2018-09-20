using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.Azure.WebJobs.Host;
using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Google.Apis.Auth.OAuth2;
using System;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.IO;

namespace FirebaseAuthenticate
{
    public static class newUser
    {
        [FunctionName("newUser")]
        public static async Task<HttpResponseMessage> Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)]HttpRequestMessage req, TraceWriter log, ExecutionContext context)
        {
            log.Info("C# HTTP trigger function processed a request.");

            //Auth

            if (req.Headers.Authorization?.Scheme != "Bearer")
                return req.CreateResponse(HttpStatusCode.Unauthorized);

            FirebaseToken decodedToken;
            string idToken = req.Headers.Authorization.Parameter;

            string path = Path.Combine(context.FunctionAppDirectory, "Data","rlait.json");

            FirebaseApp firebase;
            log.Info(path);
            try
            {
                 firebase = FirebaseApp.Create(new AppOptions()
                {
                    Credential = GoogleCredential.FromFile(path),
                });

            } catch (Exception e)
            {
                log.Info("FirebaseApp exists");
            }

           
            try
            {
                decodedToken = await FirebaseAuth.DefaultInstance.VerifyIdTokenAsync(idToken);
            }
            catch (Exception e)
            {
                log.Info("FailedAuth" + idToken);
                return req.CreateResponse(HttpStatusCode.Unauthorized);
            }

            //SQL
            string PID = req.GetQueryNameValuePairs().FirstOrDefault(q => string.Compare(q.Key, "PID", true) == 0).Value;
            string username = req.GetQueryNameValuePairs().FirstOrDefault(q => string.Compare(q.Key, "username", true) == 0).Value;
            string email = req.GetQueryNameValuePairs().FirstOrDefault(q => string.Compare(q.Key, "email", true) == 0).Value;
            string avatar = req.GetQueryNameValuePairs().FirstOrDefault(q => string.Compare(q.Key, "avatar", true) == 0).Value;

            dynamic data = await req.Content.ReadAsAsync<object>();

            // Set name to query string or body data
            PID = PID ?? data?.PID;
            username = username ?? data?.username;
            email = email ?? data?.email;
            avatar = avatar ?? data?.avatar;


            log.Info("1 " + PID);
            log.Info("2 " + username);
            log.Info("3 " + email);
            log.Info("4 " + avatar);


            var str = "Server=tcp:rlait.database.windows.net,1433;Initial Catalog=RocketLeagueAI;Persist Security Info=False;User ID=cap_admin;Password=qwerty_1234567;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            if (PID == null || PID == "")
                req.CreateResponse(HttpStatusCode.BadRequest, "Please pass a name on the query string or in the request body");


            string sql = "INSERT INTO profile (PID, username, email, avatar, ELO, matchesPlayed) values ('" + PID + "', '" + username + "', '" + email + "', '" + avatar + "', 0, 0);";

            using (SqlConnection connection = new SqlConnection(str))
            {
                SqlCommand command = new SqlCommand(sql, connection);
                command.Connection.Open();
                command.ExecuteNonQuery();
            }

            string uid = decodedToken.Uid;


            return uid == null
                ? req.CreateResponse(HttpStatusCode.BadRequest, "Please pass a name on the query string or in the request body")
                : req.CreateResponse(HttpStatusCode.OK, "Hello " + uid);
        }
    }
}

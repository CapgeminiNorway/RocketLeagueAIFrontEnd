const azure  = require('azure-storage');
const multer = require('multer');

        
module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    let storageConnection = GetEnvironmentVariable("rocketleagueappfunc_STORAGE");
    context.log(storageConnection);
    var blobService = azure.createBlobService(storageConnection);
    
    blobService.listBlobsSegmented('uploaded-submissions', null, function(error, result, response){
        context.log("blob list");
    if(!error){
        for(entryId in result.entries){
            context.log("entry ",  result.entries[entryId].name);
        }
        // result.entries contains the entries
        // If not all blobs were returned, result.continuationToken has the continuation token.
    }
    });

    // Iterates through trigger and input binding data
    context.bindings.submissionBlob = req.body;
    context.bindings.outputTable = [];
    /*context.bindings.outputTable.push({
            PartitionKey: "Test",
            RowKey: "1234",
            Name: "Name " + req.query.name,
            Email: "test email 3"
        });
        */
    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    outputBindings = {filename: "test.txt"};
    context.log('output ',outputBindings);
    context.log('body', req.body);
    context.bindings.submissionBlob = req.body;

    context.done(null, outputBindings );
};

function GetEnvironmentVariable(name)
{
    return process.env[name];
}
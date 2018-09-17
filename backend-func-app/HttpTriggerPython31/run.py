import os
import json
from azure.storage.blob import BlockBlobService

response = open(os.environ['res'], 'w')

try:
    #postreqdata = json.loads(open(os.environ['req']).read())
    #os.environ['req']
    name = "test" #os.environ['req_query_name']
    response.write("hello world from "+name)
except ValueError as err:
    print("Error " + err.message)

response.close()


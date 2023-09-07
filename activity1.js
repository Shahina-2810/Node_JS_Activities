const {MongoClient}=require('mongodb'); //importing mongodb
const client = new MongoClient('mongodb://127.0.0.1:27017') //default port number for connecting to mongodb

async function main(){
    await client.connect();
    console.log('Server connected') //checking client is connected or not, we are printing a message in cmd if connected
}
main() // function call
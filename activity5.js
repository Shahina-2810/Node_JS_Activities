//update one document
const {MongoClient} = require('mongodb');
const client= new MongoClient('mongodb://127.0.0.1:27017')

async function main(){
    await client.connect();
    console.log('Server connected')

    const db=client.db("makeskilled"); //creating a database
    console.log('database selected') 

    const collection=db.collection('teamdetails'); //creating a collection
    console.log('collection selected');

    
    const result= await collection.insertMany([{"name":"Shahina"},{"age":"19"}]);
    console.log(result)

    const result1= await collection.updateOne({"name":"Shahina"},{$set:{"age":"18"}});
    console.log(result1);
    console.log('one document updated')


    return result1;

}
main()
        .then(console.log)
        .catch(console.error)
        .finally(()=>client.close())
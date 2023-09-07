//inserting many records

const {MongoClient} = require('mongodb');
const client= new MongoClient('mongodb://127.0.0.1:27017')

async function main(){
    await client.connect();
    console.log('Server connected')

    const db=client.db("makeskilled"); //creating a database
    console.log('database selected') 

    const collection=db.collection('teamdetails'); //creating a collection
    console.log('collection selected');
    
    
    const result= await collection.insertMany([{"name":"Chandini","age":"19"},{"name":"Keerti","age":"19"}]);
    console.log(result)
    console.log('inserted many records')


    return 'result';

}
main()
        .then(console.log)
        .catch(console.error)
        .finally(()=>client.close())
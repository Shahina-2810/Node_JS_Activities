//connecting to database , connecting to collection and retrieving data 

const {MongoClient} = require('mongodb');

const client= new MongoClient('mongodb://127.0.0.1:27017')

async function main(){
    await client.connect();
    console.log('Server connected')

    const db=client.db("makeskilled"); //creating a database
    console.log('database selected') 

    const collection=db.collection('teamdetails'); //creating a collection
    console.log('collection selected');
    
    return 'done';

}
main()
        .then(console.log)
        .catch(console.error)
        .finally(()=>client.close())
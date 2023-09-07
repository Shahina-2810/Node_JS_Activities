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

    const result= await collection.find({}).toArray(); //retrieve the data //since we have not inserted any data we get empty[]

    console.log(result)
    return 'done';

}
main()

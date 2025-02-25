/* eslint-disable no-undef */
import mongoose from 'mongoose';
// import moduleName from 'module';

async  function dbConnection(){
    try{
const urlStr =  process.env.DB || "no db connection string found";

if(!urlStr)
    return console.log('cannot connect Db');

const conn =await  mongoose.connect(urlStr);
if(!conn)
    return console.log('something went wrong in connection');

console.log('connected to DB');

    }catch(e){
        console.log(e)
    }
}

export default  dbConnection;
/* eslint-disable no-undef */
import express from 'express';
const app =  express();
import 'dotenv/config';
const port = process.env.PORT  || 4000;
import cors from 'cors';
import dbConnection from './server/database/db.js';

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors());
app.set("view engine", "ejs");



// ! admin routes
import adminRoute from './server/router/admin.routes.js';
import facultyRoute from './server/router/faculty.routes.js';
app.use("/", adminRoute)

app.use("/", facultyRoute)






function forgottenUrl(req, res){
    res.render("404");
}
app.all("*", forgottenUrl)


app.listen(8000, ()=>{
    dbConnection()
    console.log(`server is running on http://localhost:${port}`)
})
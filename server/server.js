const express = require("express");

const app = express();

require('dotenv').config();//handles env

const cookieParser = require('cookie-parser'); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());//middleware to parse json - to receive json data
app.use(cookieParser());//to have req.cookies...

app.use(express.static('client/build')) //It serves static files and is based on serve-static. where are the static files

// UTILS
const { sendEmail } = require('./utils/mail/index');

app.post('/api/email.submit', async (req, res) => {
    try {
        console.log("------------------email.submit BEGINS--------------------");
        console.log("------------------email.submit req.body=", req.body);  
        
        if (!req.body.email) return res.send({success:false, errorId:1}) //email is missing

        const user = req.body;

        sendEmail(null, null, null, "contactFormMessage", user); //send contact form email
            return res.send({success: true});
    } catch (error) {
        res.send({success:false, errorId: error.message})
    }
    
})

//=================================
//          APIS END
//=================================
// DEFAULT - MUST BE AT THE END!
//if route cannot be found - works only in production

if( process.env.NODE_ENV === 'production' ){ //if it's production environment
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html')) //send file index.html
    })
}

const port = process.env.PORT || 8002;
app.listen(port,()=>{
    console.log(`Our Server is Up and Running at ${port}`)
})
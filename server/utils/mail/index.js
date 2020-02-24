const mailer = require('nodemailer');
const { welcome } = require("./contactform_template");
require('dotenv').config();


const getEmailData = (to, name, token, template, actionData) => {

    console.log("MAIL: getEmailData: to=", to, 'name=', name, 'token=', token, 'template=', template, 'actionData=', actionData);

    let data = null;

    switch(template){
        case "contactFormMessage":
            data = {
                from: `Pro Sport Coin <${process.env.EMAIL_SENDER}>`,
                to: process.env.EMAIL_RECEIVER,
                subject: `You have message from contact form`,
                html: welcome(actionData)
            }
        break;
        default:
            data;
    }
    return data;
}


const sendEmail = (to, name, token, type, actionData = null) => {

    console.log('MAIL: sendEmail: to=', to, 'name=', name, 'token=', token,'type=', type, 'actiondata=', actionData);

    const smtpTransport = mailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        tls: {
            rejectUnauthorized:false
        },
        auth:{
            user: process.env.EMAIL_SENDER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mail = getEmailData(to,name,token,type,actionData)

    smtpTransport.sendMail(mail,function(error,response){
        if(error){
            console.log(error);
        } else {
            cb()
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }
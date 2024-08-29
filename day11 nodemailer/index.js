const nodemailer=require('nodemailer');
require('dotenv').config();

const sendMial= async()=>{
    const transporter=await nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.USERMAIL,
            pass:process.env.USERPASS,
        }
    });
    transporter.sendMail({
        from:process.env.USERMAIL,
        to:'yashodakhatri30@gmail.com',
        subject:'this is welcome mail',
        html:`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            background-color: red;
        }
        div{
            color: white;
            background-color:red;
            font-size: 100px;
            display: grid;
            place-items: center;
            height: 100vh;
        }

    </style>
</head>
<body>
    <div>
        this is system generated mail
    </div>
</body>
</html>
        `,
    }, (error,success)=>{
        if(error) return console.log(error);
        console.log('mail send successfull');
    })
}

sendMial();
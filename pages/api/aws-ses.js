// aws-ses.js
import * as AWS from "aws-sdk";
import * as nodemailer from "nodemailer";
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_TBC,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_TBC,
  region: "us-east-1",
});
AWS.config.getCredentials(function (error) {
  if (error) {
    console.log(error.stack);
  }
});
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// change this to the "to" email that you want
const adminMail = "tbcguides@gmail.com";
// Create a transporter of nodemailer
const transporter = nodemailer.createTransport({
  SES: ses,
});

async function testMail (req, res) {
    if (req.method === "POST") {
        const { date, email, name, phone, guests } = req.body;

        try {
          const response = await transporter.sendMail({
            from: adminMail,
            to: adminMail,
            subject: "You have a new customer!",
            html: `<p><strong>Name: </strong>${name}</p>
    <p><strong>Preferred Date: </strong>${date}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Phone: </strong>${phone}</p>
    <p><strong>Number of guests: </strong>${guests}</p>`,
          });
          return response?.messageId
            ? { ok: true }
            : { ok: false, msg: "Failed to send email" };
        } catch (error) {
          console.log("ERROR", error.message);
          return { ok: false, msg: "Failed to send email" };
        }
    }
  
};

export default testMail

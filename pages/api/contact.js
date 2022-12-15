const sgMail = require('@sendgrid/mail')

 sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 
async function handler(req, res) {
  const { date, email, name, phone, guests } = req.body;
 
  const msg = {
    to: "tbcguides@gmail.com",
    from: "admin@tbcguides.fish",
    subject: "You have a new customer!",
    html: `<p><strong>Name: </strong>${name}</p>
    <p><strong>Preferred Date: </strong>${date}</p>
    <p><strong>Email: </strong>${email}</p>
    <p><strong>Phone: </strong>${phone}</p>
    <p><strong>Number of guests: </strong>${guests}</p>`,
  };

  try {
    await sgMail.send(msg);
    res.json({ message: `Email has been sent` });
  } catch (error) {
    res.status(500).json({ error: "Error sending email" });
    console.log(error)
  }
};

export default handler



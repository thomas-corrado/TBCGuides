// import { google } from "googleapis";

// async function handler(req, res) {
//   if (req.method === "POST") {
//     const { to, subject, description } = req.body;

//    const auth = new google.auth.JWT(
//      process.env.GOOGLE_CLIENT_EMAIL,
//      null,
//      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//      ["https://www.googleapis.com/auth/gmail.send"]
//    );

//    const gmail = google.gmail({ version: "v1", auth });

//    const message = [
//      "Content-Type: text/html; charset=utf-8",
//      `To: ${to}`,
//      `Subject: ${subject}`,
//      "",
//      description,
//    ].join("\n");

//    const encodedMessage = Buffer.from(message).toString("base64");

//    const response = await gmail.users.messages.send({
//      userId: "me",
//      resource: {
//        raw: encodedMessage,
//      },
//    });

//    console.log(response.data);

//     res.status(201).json({ message: "It works!", response });
//   }
//   res.status(200).json({ message: "Hey!" });
// }

// export default handler;



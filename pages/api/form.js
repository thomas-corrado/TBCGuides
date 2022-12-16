import { google } from "googleapis";

async function handler(req, res) {

  if (req.method === "POST") {
    const { name, phone, email, guests, date, emoji } = req.body;

     var parsedDate =
       date.substring(0, 10).split("-")[1] +
       "/" +
       date.substring(0, 10).split("-")[2] +
       "/" +
       date.substring(0, 10).split("-")[0];

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:G1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, phone, email, guests, parsedDate, emoji]],
      },
    });

    res.status(201).json({ message: "It works!", response });
  }
  res.status(200).json({ message: "Hey!" });
}

export default handler

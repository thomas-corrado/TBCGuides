# import os
# from googleapiclient.discovery import build
# from googleapiclient.errors import HttpError
# from google.oauth2.credentials import Credentials

# # Set the Gmail API credentials
# creds = Credentials.from_authorized_user_info(info={"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET", "refresh_token": "YOUR_REFRESH_TOKEN"})

# # Set the email address of the sender and the recipient
# sender = "sender@gmail.com"
# to = "recipient@gmail.com"

# # Set the subject and body of the email
# subject = "Test email from Python"
# body = "This is a test email sent from Python using the Gmail API."

# # Build the Gmail API service
# service = build("gmail", "v1", credentials=creds)

# try:
#     # Create a new message
#     message = {
#         "raw": f"To: {to}\nFrom: {sender}\nSubject: {subject}\n\n{body}"
#     }
#     # Send the email
#     message = (service.users().messages().send(userId="me", body=message).execute())
#     print(F'sent message to {to} Message Id: {message["id"]}')
# except HttpError as error:
#     print(F'An error occurred: {error}')
#     send_message = None

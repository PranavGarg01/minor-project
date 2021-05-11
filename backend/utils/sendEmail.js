const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const config = require("config");
const oauthClientId = config.get("oauthClientId");
const oauthClientSecret = config.get("oauthClientSecret");
const oauthRefreshToken = config.get("oauthRefreshToken");
const OAuth2 = google.auth.OAuth2;
const oauth2Client = new OAuth2(
  oauthClientId,
  oauthClientSecret,
  "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
  refresh_token: oauthRefreshToken,
});

const accessToken = oauth2Client.getAccessToken();
const sendEmail = async (options) => {
  // create reusable transporter object using the default SMTP transport

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      //   user: process.env.SMTP_EMAIL,
      user: "pannugarg22@gmail.com",
      clientId: oauthClientId,
      clientSecret: oauthClientSecret,
      refreshToken: oauthRefreshToken,
      accessToken: accessToken,
    },
  });

  const message = {
    from: `Pranav Garg pannugarg22@gmail.com`,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  const info = await transporter.sendMail(message);

  console.log("Message sent: %s", info.messageId);
};

module.exports = sendEmail;

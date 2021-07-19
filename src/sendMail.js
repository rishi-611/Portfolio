const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async ({ name, email, message }) => {
  const mailToMe = {
    to: "rishi18454@gmail.com", // Change to your recipient
    from: "rishi18454@gmail.com", // Change to your verified sender
    subject: `${name} tried to contact you from the website`,
    text: message,
  };

  const mailToUser = {
    to: email, // Change to your recipient
    from: "rishi18454@gmail.com", // Change to your verified sender
    subject: "Thanks for contacting me",
    text: `
    Hey ${name.split(" ")[0]}!

    Thanks you for your Email. I'll get in touch with you as soon as possible!

    Best Regards
    Rishi
    `,
  };

  try {
    await sgMail.send(mailToUser);
    await sgMail.send(mailToMe);
  } catch (err) {
    console.log(err.response.body);
    throw new Error(err);
  }
};

module.exports = sendMail;

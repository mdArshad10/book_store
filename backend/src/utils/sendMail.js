import nodemailer from "nodemailer";
import Mailgen from "mailgen";

// Looking to send emails in production? Check out our Email API/SMTP product!
var transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: NODEMAILER_HOST_PORT==465 ? true : false,
  auth: {
    user: "arshadwebdeveloper10@gmail.com",
    pass: "vyyjgczsrqcmegsh",
  },
});

const sendEmail = async (options) => {
  //   Configure mailgen by setting a theme and your product info
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "bookStore",
      link: "https://mailgen.js",
    },
  });

  const email = {
    body: {
      name: "John Appleseed",
      intro: "Welcome to Mailgen! We're very excited to have you on board.",
      outro:
        "Need help, or have questions? Just reply to this email, we'd love to help.",
    },
  };

  // Generate an HTML email with the provided contents
  const emailBody = mailGenerator.generate(email);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = mailGenerator.generatePlaintext(email);

  const mail = {
    from: "marshd246@gmail.com",
    to: options.email, // receiver's mail
    subject: options.subject, // mail subject
    text: emailText, // mailgen content textual variant
    html: emailBody, // mailgen content html variant
  };

  try {
    const value = await transporter.sendMail(mail);
    console.log("mail sent successfully");
    return value;
  } catch (error) {
    console.log("Failed to send email", error);
    return null;
  }
};

const options = {
  email: "xiway13878@angewy.com",
  subject: "Welcome to bookStore!",
};

const a = await sendEmail(options);


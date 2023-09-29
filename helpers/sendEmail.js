const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD } = process.env;

const sendEmail = async (data) => {
  const config = {
    host: "smtp.meta.ua",
    port: 465,
    secure: true,
    auth: {
      user: "elvralema97@meta.ua",
      pass: META_PASSWORD,
    },
  };

  const transport = nodemailer.createTransport(config);

  const email = { from: "elvralema97@meta.ua", ...data };
  await transport.sendMail(email);

  return true;
};

module.exports = sendEmail;

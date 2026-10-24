import { MailtrapClient } from "mailtrap";
import "dotenv/config.js";

export const mailtrapClient = new MailtrapClient({
	endpoint: process.env.MAILTRAP_ENDPOINT,
	token: process.env.MAILTRAP_TOKEN,
});

export const sender = {
	email: "hello@demomailtrap.co",
	name: "Kenneac",
};

// TO TEST THE MAILTRAP CONFIGURATION, UNCOMMENT THE CODE BELOW AND RUN THE SERVER. IT WILL SEND A TEST EMAIL TO THE SPECIFIED RECIPIENTS. 
// RUN FROM THE TERMINAL:> node .\src\mailtrap\mailtrap.config.js 
// NOTE: Make sure to replace the recipient email address with your own email address to receive the test email.
//
// const recipients = [
//   {
//     email: "meetkenn2diol@gmail.com",
//   }
// ];

// mailtrapClient
//   .send({
//     from: sender,
//     to: recipients,
//     subject: "You are awesome!",
//     text: "Congrats for sending test email with Mailtrap!",
//     category: "Integration Test",
//   })
//   .then(console.log, console.error);

import nodemailer from 'nodemailer';

export const sendEmail = async(email, subject, text) => {
  try {
	const transporter = nodemailer.createTransport({
		service: process.env.SERVICE,
		host: process.env.HOST,
		port: Number(process.env.EMAIL_PORT),
		secure: Boolean(process.env.SECURE),
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD
		}
	});
	//  send email
	await transporter.sendMail({
		from: process.env.EMAIL,
		to: email,
		subject: subject,
		text: text
	});
  } catch (error) {
	throw error;
  }
}


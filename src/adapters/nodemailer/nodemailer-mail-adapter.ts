import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 465,
  auth: {
    user: '8ba86c4730bc17',
    pass: '13b5cebf0f6a9a'
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedback Wedget <fedbackwedget@test.com>',
      to: 'elisioDev@outlook.com',
      subject,
      html: body,
    })
  };
}
import {MailAdapter, SendMailData} from "../MailAdapter";
import nodemailer from "nodemailer";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1d2f2ec9c64d1d",
        pass: "e0886d021038bd"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData): Promise<void> {
        await transport.sendMail({
            from: 'Equipe feedget <oi@feedget.com>',
            to: 'Van-Romel <romel@gmail.com>',
            subject,
            html: body,
        });
    }

}
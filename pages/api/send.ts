import { NextApiResponse, NextApiRequest } from "next";
import sgMail from '@sendgrid/mail';

export default async function(req: NextApiRequest, res: NextApiResponse) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { email, message }: any = req.body;

    const content = {
        to: 'theo@theojoyce.com',
        from: email,
        subject: `Portfolio Site Response From ${email.slice(0, email.indexOf('@'))}`,
        text: message,
        html: `<p>${message}</p>`
    }

    try {
        await sgMail.send(content);
        res.status(200).send("Success");
    } catch (err) {
        res.status(400).send('Message failed to send.');
    }
}
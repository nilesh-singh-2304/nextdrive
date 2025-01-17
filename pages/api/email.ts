import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend("re_DJuP9erZ_C2mCpbXYx9mG9SNWuokZsZo4");

export default async (req: NextApiRequest, res: NextApiResponse) => {
 if(req.method === 'POST'){
  const { error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['shyaam2304@gmail.com'],
    subject: 'New Query Recieved',
    text : `
    Name : ${req.body.name}
    Email : ${req.body.email}
    Phone Number : ${req.body.phone}
    Project Budget : ${req.body.projbudget}
    Project Deadline : ${req.body.projDeadline}
    Message : ${req.body.message}
    `
  });

  if (error) {
    return res.status(200).json({success : false , err: error});
  }

  res.status(200).json({success : true});
 }

 else{
  res.status(400).json({success : false});
 }
};

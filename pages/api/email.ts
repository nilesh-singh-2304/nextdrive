import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend("re_DJuP9erZ_C2mCpbXYx9mG9SNWuokZsZo4");

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['shyaam2304@gmail.com'],
    subject: 'Hello world',
    text: 'Hello world!',
  });

  if (error) {
    return res.status(400).json(error);
  }

  res.status(200).json(data);
};

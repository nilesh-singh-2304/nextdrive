import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    if(req.method === 'POST'){
        if(req.body.email === 'sh@gmail.com' && req.body.password === '123'){
            res.status(200).json({success : true});
        }
        else{
            res.status(200).json({success : false});
        }
    }
  res.status(400).json({ name: "John Doe" });
}

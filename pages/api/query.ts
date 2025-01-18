import type { NextApiRequest, NextApiResponse } from "next";
import query from "@/model/query";
import connectDB from "@/middleware/mongoose";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
  )=> {
    if(req.method == 'POST'){
        console.log(req.body)
        
          const p = new query({
            name : req.body.name,
            email : req.body.email,
            phone : req.body.phone,
            projbudget : req.body.projbudget,
            projDeadline : req.body.projDeadline,
            message : req.body.message
        })
        await p.save();
        // console.log(p)
        res.status(200).json({ success:true ,prod:p});

    }
    else{
        res.status(400).json({ success : false });
    }
      
  }
  

export default connectDB(handler)
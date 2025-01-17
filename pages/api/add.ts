import type { NextApiRequest, NextApiResponse } from "next";
import blog from "@/model/blogs";
import connectDB from "@/middleware/mongoose";


const handler = async (
    req: NextApiRequest,
    res: NextApiResponse,
  )=> {
    if(req.method == 'POST'){
        console.log(req.body)
        
        if(req.body.mdt == 'add'){
          const p = new blog({
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            imageurl: req.body.image,
            author: req.body.email
        })
        await p.save();
    
        res.status(200).json({ success:true ,prod:p});
        }

        if(req.body.mdt == 'edit'){
          const title = req.body.title;
          const description = req.body.description;
          const category = req.body.category; 
          const image = req.body.image;
          const email = req.body.email;
          const id = req.body.id;
          const p = await blog.findOneAndUpdate({ _id: id }, { $set: { title: title, description: description, category: category, imageurl: image, author: email } });
    
        res.status(200).json({ success:true ,prod:p});
        }

        if(req.body.mdt == 'delete'){
          const id = req.body.id;
          const p = await blog.findOneAndDelete({ _id: id });
    
        res.status(200).json({ success:true ,prod:p});
        }
            
        
    }
    else{
        res.status(400).json({ success : false });
    }
      
  }
  

export default connectDB(handler)
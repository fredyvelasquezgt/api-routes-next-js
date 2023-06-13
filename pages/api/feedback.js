import fs from 'fs';
import path from 'path'

function handler(req, res) {
  if(req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    };

    //store data in a database or in a file 
    const filePath = path.join(process.cwd(), 'data', 'feedback.json')
    const fileData = fs.readFileSync(filePath)
    const data = JSON.parse(fileData)

  }
  res.status(200).json({message: 'this works'});
}

export default handler;
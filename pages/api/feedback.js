import fs from 'fs';
import path from 'path'

function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json')
}

function extractFeedback() {
  const fileData = fs.readFileSync(filePath)
  const data = JSON.parse(fileData)
}

function handler(req, res) {
  if(req.method === 'POST') {
    const email = JSON.parse(req.body.email);
    const feedbackText = JSON.parse(req.body.text);

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    };

    //store data in a database or in a file 
    const filePath = buildFeedbackPath();
    
    data.push(newFeedback)
    fs.writeFileSync(filePath, JSON.stringify(allData));
    res.status(201).json({message: 'success!', feedback: newFeedback})

  } else {
    const filePath = buildFeedbackPath();
    res.status(200).json({message: 'this works'});
  }
}

export default handler;
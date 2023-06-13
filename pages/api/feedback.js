function handler(req, res) {
  if(req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;

    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText
    };

    
  }
  res.status(200).json({message: 'this works'});
}

export default handler;
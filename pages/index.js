import {useRef} from 'react';

function HomePage() {

  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Email Address</label>
          <textarea id="feedback" rows="5" ref={feedbackInputRef} ></textarea>
        </div>
        <button>Send Feedback</button>

      </form>
    </div>
  )
}

export default HomePage;
import video from "../data/video.js";
import Header from "./Header.js";
import Button from "./Button.js";
import Comments from "./Comments.js";
import { useState } from "react";

function App() {
  console.log("Here's your data:", video);

  const [upVotes, setUpVotes] = useState(video.upvotes);
  const [downVotes, setDownVotes] = useState(video.downvotes);

  function handleUpVotes() {
    setUpVotes(upVotes + 1);
  }

  function handleDownVotes() {
    setDownVotes(downVotes - 1);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header />
      <Button handleClick={handleUpVotes} data={upVotes} emoji="👍" />
      <Button handleClick={handleDownVotes} data={downVotes} emoji="👎" />
      <br></br>
      <Comments comments={video.comments} />
    </div>
  );
}

export default App;

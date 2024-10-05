import { useState } from "react";

import classes from "./../post-listing/PostListings.module.css";
import Post from "../first-component/Post";
import NewPost from "../new-post/NewPost";
import FormModal from "./../../modals/FormModal"

function PostListings({isModalAvailable, onClose}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  
  function bodyChangedHandler(event) {
    setEnteredBody(event.target.value);

  }

  function authorChangedHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isModalAvailable && (
         <FormModal onClose = {onClose} >
         <NewPost
           onBodyChangedHandler={bodyChangedHandler}
           onAuthorChangedHandler={authorChangedHandler}
         />
         </FormModal>

      )}
     
    
      <ul className={classes.posts}>
        <Post author={enteredAuthor} text={enteredBody} />
        <Post author="SumitT" text="This is React Second Component" />
      </ul>
    </>
  );
}
export default PostListings;

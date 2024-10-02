import classes from  "./../post-listing/PostListings.module.css";
import Post from "../first-component/Post";
function PostListings() {
  return (
    <ul className= {classes.posts}>
        <Post author="Sumit" text="This is React First Component" />
        <Post author="SumitT" text="This is React Second Component" />
    </ul>
  );
}
export default PostListings;

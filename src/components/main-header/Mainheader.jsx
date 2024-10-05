import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from "./../main-header/Mainheader.module.css";


function Mainheader({onCreatePost}) {
  return (
    <header>
      <h1 className={classes.header}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <button className={classes.button} onClick = {onCreatePost} >
          <MdPostAdd size={18} />
          New Post
        </button >
      </p>
    </header>
  );
}

export default Mainheader;

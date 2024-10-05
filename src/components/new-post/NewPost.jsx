import classes from "./../new-post/NewPost.module.css"

function NewPost(props){

        return (
            <form className= {classes.form}>
                <p>
                <label htmlFor="body" >Text</label>
                <textarea id = "body" required rows={3} onChange={props.onBodyChangedHandler}></textarea>
                </p>
                <p>
                <label htmlFor="name" >Name</label>
                <input type="text" id ="name" onChange={props.onAuthorChangedHandler}></input>
                </p>
                
            </form>

        );

}

export default NewPost
import React, {useState} from 'react';
import Myinput from "./UI/input/myinput";
import Mybutton from "./UI/button/mybutton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <div>
            <form>
                <Myinput
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    type="text"
                    placeholder="Название поста"/>
                <Myinput
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text"
                    placeholder="Описание поста"/>
                <Mybutton onClick={addNewPost}>Создать пост</Mybutton>
            </form>
            
        </div>
    );
};

export default PostForm;
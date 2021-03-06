import React from 'react';
import Mybutton from "./UI/button/mybutton";
import {useNavigate} from "react-router-dom";


const Postitem = (props) => {
    const router = useNavigate()

    return (
        <div className="post">
            <div className="post__content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <Mybutton onClick={() => router(`/posts/${props.post.id}`)}>
                    Открыть
                </Mybutton>
                <Mybutton onClick={() => props.remove(props.post)}>
                    Удалить
                </Mybutton>
            </div>
        </div>
    );
};

export default Postitem;
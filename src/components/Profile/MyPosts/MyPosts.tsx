import React from 'react';
import s from './MyPosts.module.css'
import {MyPost} from "./Post/MyPost";
import AddPost from "./AddPost/AddPost";

function MyPosts() {
    return (
        <div className={s.item}>
            <div><img
                 src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqKCndwdYm6_wcRzJgmfnqtXqYIEQL52AsXw&usqp=CAU' alt='avatar-img'/>
                <div>MyPost</div>
            </div>
            <AddPost/>
            <MyPost title={'Hi how are you?'}/>
            <MyPost title={"It's my first post"}/>

        </div>
    );
}

export default MyPosts;
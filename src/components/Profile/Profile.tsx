import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div>
            <div><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIKpwGU2p2U6eQSS7pABZBw-cYgIFr0Flc31YVm_3-5czl7it7DR7C8QbBH3oPeN5hDD0&usqp=CAU' alt='main-img'/></div>
            Main Content
            <MyPosts/>
        </div>
    );
}

export default Profile;
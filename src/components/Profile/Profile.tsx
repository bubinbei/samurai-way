import React from 'react';
import s from './Profile.module.css'
import MyPost from './MyPost/MyPost';

function Profile() {
    return (
        <div className={s.content}>
            <img src="https://get.wallhere.com/photo/3840x1200-px-landscape-plains-662119.jpg"/>
            <div>ava + description</div>
            <MyPost />
            </div>
    );
}

export default Profile;

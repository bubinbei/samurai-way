import React from 'react'
import s from './MyPost.module.css'
import Post from './Post/Post'

export default function MyPost() {
  return (
    <>
      <div>my_post</div>
      <div>new_post</div>
      <div className={s.post}>
        <Post message = 'Hi!'/>
        <Post message = 'hulinada?'/>
      </div>
      <div>content</div>
    </>
  )
}


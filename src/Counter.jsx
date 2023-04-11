// This jsx file just example for Redux and some of its properties...

import React from 'react'
import { createStore } from 'redux'
import configureStore from './store/configureStore';
import { addBlog, deleteBlog, editBlog } from './action/blogAction';

const store = configureStore();




store.subscribe(() => {
    console.log(store.getState())
})

const blog1 = store.dispatch(addBlog({title:"Blog1-title",desc:"Blog1-desc",img:"Blog1-photo"}));
const blog2 = store.dispatch(addBlog({title:"Blog2-title",desc:"Blog2-desc",img:"Blog2-photo"}));

store.dispatch(
    editBlog(blog1.blog.id, {title:"Blog1-title-updated",desc:"Blog1-desc-updated",photo:"Blog1-photo-updated"})
)

store.dispatch(
    deleteBlog({id:blog1.blog.id})
)


export const Counter = () => {
    return (
        <div></div>
    )
}


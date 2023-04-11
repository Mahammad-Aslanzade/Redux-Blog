import { v4 as uuidv4 } from 'uuid';


export const addBlog = ({title, desc, img}) => ({
    type: "ADD_BLOG",
    blog: {
        id: uuidv4(),
        title,
        desc,
        img
    }
})

export const editBlog = (id,update) => ({
    type: "EDIT_BLOG",
    id,
    update
})

export const deleteBlog = ({id}) => ({
    type: "DELETE_BLOG",
    id: id,
})


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])




    return (
        <div>
            <h1>User Posted: {post.id}</h1>
            <p>Title : {post.title} </p>
            <p>Post Body : {post.body}</p>
            <p>Number of comments : {comments.length}</p>
            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetails;
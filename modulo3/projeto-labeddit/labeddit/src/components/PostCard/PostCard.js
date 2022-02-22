import { PostAddRounded } from '@material-ui/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/url';
import useRequestData from '../../hooks/useRequestData';

const PostCard = () => {
    const params = useParams();

    const comments = useRequestData([], `${baseURL}/posts/${params.id}/comments`);
    const posts = useRequestData([], `${baseURL}/posts`);

    console.log(comments)
    console.log(posts);
    // console.log(params)


    const renderPost = posts && posts.map((post) => {
        if (post.id === params.id)
            return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>Criado por: {post.username}</p>
                <p>Feito em: {post.createdAt}</p>
                <p>Comentários: {post.commentCount}</p>
                <p>Curtidas: {post.voteSum}</p>
            </div>
    });

    const renderComments = comments && comments.map((comment) => {
        return <div key={comment.id}>
            <p>Comentário: {comment.body}</p>
            <p>User: {comment.username}</p>
            <p>Curtidas: {comment.voteSum}</p>
            <p>Criado em: {comment.createdAt}</p>
        </div>
    })


    return (
        <div>
            {renderPost}
            <hr/>
            {renderComments}
        </div>
    );
};

export default PostCard;

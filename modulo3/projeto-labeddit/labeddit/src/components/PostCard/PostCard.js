import { PostAddRounded } from '@material-ui/icons';
import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/url';
import useForm from '../../hooks/useForm';
import useRequestData from '../../hooks/useRequestData';
import { changeCommentVote, changePostVote, createComment, createCommentVote, createPostVote, deleteCommentVote, deletePostVote } from '../../services/posts';

const PostCard = () => {
    const params = useParams();
    const [form, onChange, clear] = useForm({ body: "" });

    const [comments, getComments] = useRequestData([], `${baseURL}/posts/${params.id}/comments`);
    const [posts] = useRequestData([], `${baseURL}/posts`);

    const submitComment = (event) => {
        event.preventDefault();
        createComment(params.id, form, clear, getComments)
    };

    const renderPost = posts && posts.map((post) => {
        if (post.id === params.id)
            return <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <p>Criado por: {post.username}</p>
                <p>Feito em: {post.createdAt}</p>
                <p>Comentários: {post.commentCount}</p>
                <p>Curtidas: {post.voteSum}</p>
                <button onClick={() => createPostVote(post.id)}>Curtir</button>
                <button onClick ={() => deletePostVote(post.id)}>Retirar curtida/descurtida</button>
                <button onClick={() => changePostVote(post.id)}>Descurtir</button>
            </div>
    });

    const renderComments = comments && comments.map((comment) => {
        return <div key={comment.id}>
            <p>Comentário: {comment.body}</p>
            <p>User: {comment.username}</p>
            <p>Curtidas: {comment.voteSum}</p>
            <p>Criado em: {comment.createdAt}</p>
            <button onClick={() => createCommentVote(comment.id)}>Curtir</button>
            <button onClick ={() => deleteCommentVote(comment.id)}>Retirar curtida/descurtida</button>
            <button onClick={() => changeCommentVote(comment.id)}>Descurtir</button>
        </div>
    });


    return (
        <div>
            {renderPost}
            <hr />
            <form onSubmit={submitComment}>
                <input
                    placeholder="Crie um novo post"
                    name="body"
                    value={form.body}
                    onChange={onChange}
                    required
                />
                <button type="submit">Criar Novo Post</button>
            </form>
            {renderComments}
        </div>
    );
};

export default PostCard;

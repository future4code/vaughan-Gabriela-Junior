import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { baseURL } from '../../constants/url';
import useForm from '../../hooks/useForm';
import useRequestData from '../../hooks/useRequestData';
import { changeCommentVote, changePostVote, createComment, createCommentVote, createPostVote, deleteCommentVote, deletePostVote } from '../../services/posts';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { ButtonContainer } from '../FeedCard/styled';
import { PostContainer, UserContainer } from './styled';
import { FormContainer } from '../PostForm/styled';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostCard = () => {
    const classes = useStyles();
    const params = useParams();
    const [form, onChange, clear] = useForm({ body: "" });

    const [comments, getComments] = useRequestData([], `${baseURL}/posts/${params.id}/comments`);
    const [posts, getPosts] = useRequestData([], `${baseURL}/posts`);

    const submitComment = (event) => {
        event.preventDefault();
        createComment(params.id, form, clear, getComments)
    };

    const renderPost = posts && posts.map((post) => {
        const date = new Date(post.createdAt)
        const fullDate = date.toDateString();
        const time = `${date.getHours()}:${date.getMinutes()}`;
        if (post.id === params.id)
            return <PostContainer key={post.id}>
                <Typography variant="caption" paragraph> Criado por <b>{post.username}</b> em {fullDate} às {time}</Typography>
                <Typography variant="h5" paragraph>{post.title} </Typography>
                <Typography variant="body1" paragraph>{post.body} </Typography>
                <ButtonContainer>
                    <Button onClick={() => changePostVote(post.id, getPosts)}><ThumbDownIcon /></Button>
                    <Button onClick={() => deletePostVote(post.id, getPosts)}>{post.voteSum == null ? 0 : (post.voteSum)}</Button>
                    <Button onClick={() => createPostVote(post.id, getPosts)}> <ThumbUpIcon /></Button>
                    <Button> <CommentIcon /> {post.commentCount == null ? 0 : (post.commentCount)} comentários</Button>
                </ButtonContainer>
            </PostContainer>
    });

    const renderComments = comments && comments.map((comment) => {
        const date = new Date(comment.createdAt)
        const fullDate = date.toDateString();
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return <div key={comment.id}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <UserContainer>
                        <AccountCircleIcon />
                        <Typography variant="caption">{comment.username} em {fullDate} às {time}</Typography>
                    </UserContainer>
                    <Typography variant="h6" paragraph>{comment.body}</Typography>
                    <Button onClick={() => changeCommentVote(comment.id, getComments, params.id)}><ThumbDownIcon /></Button>
                    <Button onClick={() => deleteCommentVote(comment.id, getComments, params.id)}>{comment.voteSum == null ? 0 : (comment.voteSum)}</Button>
                    <Button onClick={() => createCommentVote(comment.id, getComments, params.id)}><ThumbUpIcon /></Button>
                </CardContent>
            </Card>
        </div>
    });


    return (
        <div>
            {renderPost}
            <FormContainer>
                <form onSubmit={submitComment}>

                    <TextField
                        variant="outlined"
                        label="Novo Comentário"
                        name="body"
                        value={form.body}
                        onChange={onChange}
                        multiline
                        minRows={4}
                        margin="dense"
                        fullWidth
                        required
                    />
                    <Button variant="outlined" color="primary" type="submit">Postar</Button>
                </form>
            </FormContainer>
            {renderComments}
        </div>
    );
};

export default PostCard;

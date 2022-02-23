import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { changePostVote, createPostVote, deletePostVote } from "../../services/posts";
import { PostContainer, ButtonContainer, CardButton } from "./styled";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Button, CircularProgress, Typography } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';

const FeedCard = ({posts, getPosts, isLoading, error}) => {
    const navigate = useNavigate();
    console.log(posts);

    const changeToPost = (id) => {
        goToPost(navigate, id);
    };

    const renderPosts = posts && posts.map((post) => {
        const date = new Date (post.createdAt)
        const fullDate = date.toDateString();
        const time = `${date.getHours()}:${date.getMinutes()}`;
        return (
            <PostContainer key={post.id}>
                <CardButton onClick={() => changeToPost(post.id)}><Typography paragraph variant="caption">Criado por <b>{post.username}</b> em {fullDate} às {time}</Typography>
                <Typography variant="h5" paragraph>{post.title} </Typography>
                <Typography variant="body1" paragraph>{post.body} </Typography></CardButton>
                <ButtonContainer>
                <Button onClick ={() => createPostVote(post.id, getPosts, -1)}><ThumbDownIcon /></Button>
                <Button onClick={() => deletePostVote(post.id, getPosts)}>{post.voteSum == null ? 0 : (post.voteSum) }</Button>
                <Button onClick ={() => createPostVote(post.id, getPosts, 1)}><ThumbUpIcon /></Button>
                <Button onClick={() => changeToPost(post.id)}> <CommentIcon /> {post.commentCount == null ? 0 : (post.commentCount)} comentários</Button>
                </ButtonContainer>

            </PostContainer>
        )
    });

    return (
        <div>
            {isLoading && <CircularProgress />}
            {!isLoading && error && <p>Ocorreu um erro.</p>}
            {!isLoading && posts && renderPosts}
        </div>
    );
};

export default FeedCard;


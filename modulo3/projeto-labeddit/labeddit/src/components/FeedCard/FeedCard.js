import { useNavigate } from "react-router-dom";
import { goToPost } from "../../routes/coordinator";
import { changePostVote, createPostVote } from "../../services/posts";
import { PostContainer, ButtonContainer } from "./styled";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Button } from "@material-ui/core";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const FeedCard = ({posts}) => {
    const navigate = useNavigate();
    console.log(posts);

    const changeToPost = (id) => {
        goToPost(navigate, id);
    };

    const renderPosts = posts && posts.map((post) => {
        return (
            <PostContainer key={post.id}>
                <h3>Título: {post.title}</h3>
                <p>{post.body}</p>
                <p>Criado por: {post.username}</p>
                <p>Feito em: {post.createdAt}</p>
                <p>Comentários: {post.commentCount == null ? 0 : (post.commentCount)}</p>
                <button onClick={() => changeToPost(post.id)}>Ver post</button>
                <ButtonContainer>
                <Button onClick ={() => changePostVote(post.id)}><ThumbDownIcon /></Button>
                {post.voteSum == null ? 0 : (post.voteSum) }
                <Button onClick ={() => createPostVote(post.id)}><ThumbUpIcon /></Button>
                
                
                </ButtonContainer>
            </PostContainer>
        )
    });

    return (
        <div>
     {renderPosts}
        </div>
    );
};

export default FeedCard;


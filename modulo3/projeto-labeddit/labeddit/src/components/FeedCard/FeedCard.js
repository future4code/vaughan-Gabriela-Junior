import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { goToPost } from "../../routes/coordinator";
import { changePostVote, createPostVote } from "../../services/posts";

const FeedCard = () => {
    const navigate = useNavigate();
    const [posts] = useRequestData([], `${baseURL}/posts`);
    console.log(posts);

    const changeToPost = (id) => {
        goToPost(navigate, id);
    };

    const renderPosts = posts && posts.map((post) => {
        return (
            <div key={post.id}>
                <h3>Título: {post.title}</h3>
                <p>{post.body}</p>
                <p>Criado por: {post.username}</p>
                <p>Feito em: {post.createdAt}</p>
                <p>Comentários: {post.commentCount}</p>
                <p>Curtidas: {post.voteSum}</p>
                <button onClick={() => changeToPost(post.id)}>Ver post</button>
                <button onClick ={() => createPostVote(post.id)}>Curtir Post</button>
                <button onClick ={() => changePostVote(post.id)}>Descurtir Post</button>
            </div>
        )
    });

    return (
        <div>
     {renderPosts}
        </div>
    );
};

export default FeedCard;


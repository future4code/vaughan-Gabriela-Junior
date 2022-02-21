import { baseURL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";

const FeedCard = () => {
    const posts = useRequestData([], `${baseURL}/posts`);
    console.log(posts)

    const renderPosts = posts && posts.map((post) => {
        return (
            <div key={post.id}>
                <h3>Título: {post.title}</h3>
                <p>{post.body}</p>
                <p>Criado por: {post.username}</p>
                <p>Feito em: {post.createdAt}</p>
                <p>Comentários: {post.commentCount}</p>
                <p>Curtidas: {post.voteSum}</p>

            </div>
        )
    })

    return (
        <div>
     {renderPosts}
        </div>
    )
};

export default FeedCard;


import { baseURL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import axios from "axios";




const FeedPage = () => {

  useProtectedPage();

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
        Feed Page!

        {renderPosts}
      </div>
    );
  }
  
  export default FeedPage;
  
import PostCard from "../../components/PostCard/PostCard";
import PostForm from "../../components/PostForm/PostForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
  useProtectedPage();

    return (
      <div>
        PostPage!
        <PostCard />
      </div>
    );
  }
  
  export default PostPage;
  
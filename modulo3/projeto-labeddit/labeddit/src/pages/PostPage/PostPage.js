import PostCard from "../../components/PostCard/PostCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import { MainStyle } from "../../styled-app";

const PostPage = () => {
  useProtectedPage();

    return (
      <MainStyle>
      <PostCard />
      </MainStyle>
    );
  }
  
  export default PostPage;
  
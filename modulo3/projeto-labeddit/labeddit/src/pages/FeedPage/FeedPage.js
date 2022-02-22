import FeedCard from "../../components/FeedCard/FeedCard";
import PostForm from "../../components/PostForm/PostForm";
import { baseURL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { MainStyle } from "../../styled-app";

const FeedPage = () => {
  useProtectedPage();

  const [posts, getPosts] = useRequestData([], `${baseURL}/posts`);
  
    return (
      <MainStyle>
        <PostForm getPosts={getPosts}/>
        <FeedCard posts={posts} getPosts={getPosts}/>
      </MainStyle>
    );
  }
  
  export default FeedPage;
  
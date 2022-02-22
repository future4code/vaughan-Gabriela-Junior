import FeedCard from "../../components/FeedCard/FeedCard";
import PostForm from "../../components/PostForm/PostForm";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {

  useProtectedPage();
  
    return (
      <div>
        <PostForm />
        Feed Page!
        <FeedCard />
      </div>
    );
  }
  
  export default FeedPage;
  
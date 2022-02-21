import FeedCard from "../../components/FeedCard/FeedCard";
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {

  useProtectedPage();
  
    return (
      <div>
        Feed Page!
        <FeedCard />
      </div>
    );
  }
  
  export default FeedPage;
  
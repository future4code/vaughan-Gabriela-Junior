import { makeStyles } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import FeedCard from "../../components/FeedCard/FeedCard";
import PostForm from "../../components/PostForm/PostForm";
import useProtectedPage from "../../hooks/useProtectedPage";
import { MainStyle } from "../../styled-app";

const useStyles = makeStyles({
  root: {
    margin: 10,
  },
});

const FeedPage = ({ posts, getPosts, currentPage, changeCurrentPage, isLoading, error }) => {
  const classes = useStyles()
  useProtectedPage();

  return (
    <MainStyle>
      <PostForm getPosts={getPosts} />
      {!isLoading && <Pagination className={classes.root} count={10} shape="rounded" color="primary" page={currentPage} onChange={changeCurrentPage} />}
      <FeedCard posts={posts} getPosts={getPosts} isLoading={isLoading} error={error} />
      {!isLoading && <Pagination className={classes.root} count={10} shape="rounded" color="primary" page={currentPage} onChange={changeCurrentPage} />}
    </MainStyle>
  );
};

export default FeedPage;

import useProtectedPage from "../../hooks/useProtectedPage";

const CreatePostPage = () => {
  useProtectedPage();

    return (
      <div>
        Create Post Page!
      </div>
    );
  }
  
  export default CreatePostPage;
  
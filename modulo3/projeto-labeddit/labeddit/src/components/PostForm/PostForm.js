import useForm from "../../hooks/useForm";
import axios from "axios";
import { baseURL } from "../../constants/url";
import useRequestData from "../../hooks/useRequestData";
import { useEffect } from "react";
import { createPost } from "../../services/posts";

const PostForm = () => {
    const [form, onChange, clear] = useForm({title: "", body: ""});
    const [posts, getPosts] = useRequestData([], `${baseURL}/posts`);

    const submitPost = (event) => {
      event.preventDefault();
      createPost(form, clear, getPosts);
    }

      return (
        <div>
          <form onSubmit={submitPost}>
          <input 
          placeholder="Título do Post"
          name="title"
          value={form.title}
          onChange={onChange}
          required
          />
          <input
          placeholder="Crie um novo post"
          name="body"
          value={form.body}
          onChange={onChange}
          required
          />
          <button type="submit">Criar Novo Post</button>
          </form>
        </div>
      );
    }
    
    export default PostForm;
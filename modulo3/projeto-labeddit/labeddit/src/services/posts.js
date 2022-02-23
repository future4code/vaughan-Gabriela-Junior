import axios from "axios";
import { baseURL } from "../constants/url";

export const createPost = async (body, clear, getData) => {
  const url = `${baseURL}/posts`
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }

  try {
    const response = await axios.post(url, body, config)
    alert(response.data)
    getData(`${baseURL}/posts`)
    clear();

  } catch (error) {
    console.log(error.response.data)
  }
};

export const createComment = async (id, body, clear, getData, getPost, urlBase) => {
  const url = `${baseURL}/posts/${id}/comments`
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }

  try {
    const response = await axios.post(url, body, config)
    alert(response.data)
    getPost(urlBase)
    getData(`${baseURL}/posts/${id}/comments`)
    clear()


  } catch (error) {
    console.log(error.response)
  }
};

export const createPostVote = async (id, getData, status) => {
  const url = `${baseURL}/posts/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }

  try {
    const response = await axios.post(url, body, config)
    console.log(response.data)
    getData(`${baseURL}/posts`)
    console.log("criou o voto")

  } catch (error) {
    console.log(error.response)
  };

};

export const changePostVote = async (id, getData, status) => {
  const url = `${baseURL}/posts/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  try {
    const response = await axios.put(url, body, config)
    console.log(response.data)
    getData(`${baseURL}/posts`)
    console.log("mudou o voto")
  } catch (error) {
    console.log(error.response)
  }
};

export const createCommentVote = async (id, getData, param, status) => {
  const url = `${baseURL}/comments/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  try {
    const response = await axios.put(url, body, config)
    console.log(response.data)
    getData(`${baseURL}/posts/${param}/comments`)
    console.log("criou o voto")

  } catch (error) {
    console.log(error.response)
  };
};

export const changeCommentVote = async (id, getData, param, status) => {
  const url = `${baseURL}/comments/${id}/votes`
  const body = {
    direction: status
  }
  const config = {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }
  try {
    const response = await axios.put(url, body, config)
    console.log(response.data)
    getData(`${baseURL}/posts/${param}/comments`)
    console.log("mudou o voto")
  } catch (error) {
    console.log(error.response)
  };

};

export const deletePostVote = async (id, getData) => {
  const url = `${baseURL}/posts/${id}/votes`
  const config = {
      headers: {
          Authorization: localStorage.getItem('token')
      }
  }

  try {
      const response = await axios.delete(url, config)
      console.log(response.data);
      getData(`${baseURL}/posts`);
      console.log("deletou o voto")

  } catch (error) {
      console.log(error.response)
  }
}

export const deleteCommentVote = async (id, getData, param) => {
  const url = `${baseURL}/comments/${id}/votes`
  const config = {
      headers: {
          Authorization: localStorage.getItem('token')
      }
  }

  try {
      const response = await axios.delete(url, config)
      console.log(response.data);
      getData(`${baseURL}/posts/${param}/comments`)
      console.log("deletou o voto")
      
  } catch (error) {
      console.log(error.response)
  }
}
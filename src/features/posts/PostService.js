import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

//get user posts
const getPosts = async () => {
  const response = await axios.get(`${API_URL}?userId=1`);
  return response.data;
}

//create post
const createPost = async (post) => {
  const response = await axios.post(`${API_URL}`, post);
  return response.data;
}

//update post
const updatePost = async (post) => {
  const response = await axios.put(`${API_URL}/${post.id}`, post);
  return response.data;
}

//delete post
const deletePost = async (postId) => {
  const response = await axios.delete(`${API_URL}/${postId}`);
  return response.data;
}

const PostService = {
  getPosts,
  createPost,
  updatePost,
  deletePost,
}

export default PostService
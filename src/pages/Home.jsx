import React, { useEffect, useState } from 'react'
import axios from 'axios'

import PostCard from '../components/PostCard'

import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="flex justify-center items-center font-bold px-10 py-5">
      <div className="flex justify-center bg-white min-w-full shadow-md">
        <div className=" w-11/12 flex flex-wrap justify-center items-center">
          {posts.map((post) => (
            <Link to={`/post/${post.id}`}>
              <PostCard key={post.id} post={post} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home

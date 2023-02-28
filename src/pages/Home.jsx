import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PostCard from '../components/PostCard'

import AddIcon from '@mui/icons-material/Add'
import Spinner from '../assets/spinner.gif'

import { Link } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { posts, loading } = useSelector((state) => state.posts)

  if (!loading) {
    return (
      <div className="flex justify-center items-center font-bold px-10 py-5">
        <div className="flex justify-center bg-white min-w-full shadow-md">
          <div className=" w-11/12 flex flex-wrap justify-center items-center">
            {posts.length > 0 ? (
              posts.map((post) => (
                <Link to={`/post/${post.id}`}>
                  <PostCard key={post.id} post={post} />
                </Link>
              ))
            ) : (
              <div className="flex flex-col justify-center items-center w-full p-5">
                <h1 className="text-2xl m-2">No Posts Found</h1>
                <button
                  onClick={() => navigate('/newpost')}
                  className="flex justify-between items-center px-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <AddIcon />
                  <h4 className="p-2 ">Create New Post</h4>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-100 m-20">
          <img width={120} className="text-center mx-auto" src={Spinner} alt="Loading" />
        </div>
      </div>
    )
  }
}

export default Home

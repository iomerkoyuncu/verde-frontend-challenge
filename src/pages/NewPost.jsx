import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addPost } from '../features/postSlice'

import { toast } from 'react-toastify'

import WestIcon from '@mui/icons-material/West'

import { IconButton } from '@mui/material'

function NewPost() {
  const { posts } = useSelector((state) => state.posts)

  const [formdata, setFormdata] = useState({
    userId: 1,
    id: posts.length + 1,
    title: '',
    body: ''
  })

  const { userId, id, title, body } = formdata

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newPost = {
      userId,
      id,
      title,
      body
    }

    dispatch(addPost(newPost))
    toast.success('Post created successfully')
    navigate('/')
  }

  return (
    <div className="flex justify-center items-center font-bold px-10 py-5">
      <div className="bg-white min-w-full shadow-md">
        <div className="flex flex-col px-10 py-5">
          <div className="flex items-center">
            <IconButton
              sx={{
                color: 'blue',
                '&:hover': {
                  color: 'blue'
                },
                backgroundColor: '#e0e0e0'
              }}
              onClick={() => navigate(-1)}
            >
              <WestIcon />
            </IconButton>
            <h1 className="p-3 text-xl">Create New Post</h1>
          </div>
          <div className="w-3/5 m-5 p-5 mx-10">
            <div className="flex flex-col">
              <label className="py-2">Title</label>
              <textarea
                onChange={handleChange}
                className="p-5 h-20 border-2 border-gray-300 rounded-md resize-none"
                type="text"
                name="title"
                value={title}
                placeholder="Enter title"
              />
              <label className="py-2">Detail</label>
              <textarea
                onChange={handleChange}
                className="p-5 border-2 h-32 border-gray-300 rounded-md resize-none"
                type="text"
                name="body"
                value={body}
                placeholder="Enter detail"
              />
            </div>
            <div className=" flex justify-end m-2 ">
              <div className=" p-2 flex justify-between ">
                <button
                  onClick={() => navigate(-1)}
                  className="flex justify-between items-center px-2 mx-2 text-white bg-red-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <h4 className="p-2 ">Cancel</h4>
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex justify-between items-center px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <h4 className="p-2 ">Submit</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPost

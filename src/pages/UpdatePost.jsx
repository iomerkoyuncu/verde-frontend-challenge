import React, { useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updatePost, deletePost } from '../features/postSlice'

import WestIcon from '@mui/icons-material/West'
import AddIcon from '@mui/icons-material/Add'
import ModeIcon from '@mui/icons-material/Mode'
import DeleteIcon from '@mui/icons-material/Delete'
import { toast } from 'react-toastify'

import { IconButton } from '@mui/material'

function UpdatePost() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()

  const { posts } = useSelector((state) => state.posts)

  const existingPost = posts.find((post) => post.id === Number(params.id))

  const { userId, id, title, body } = existingPost

  const [formdata, setFormdata] = useState({
    title,
    body
  })

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedPost = {
      userId,
      id,
      title: formdata.title,
      body: formdata.body
    }

    dispatch(updatePost(updatedPost))
    toast.success('Post updated successfully.')
    navigate('/')
  }

  const handleDelete = (e) => {
    e.preventDefault()

    dispatch(deletePost(id))
    toast.error('Post deleted.')
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
            <h1 className="p-3 text-xl">Update Post</h1>
          </div>
          <div className="w-3/5 m-5 p-5 mx-10">
            <div className="flex justify-end m-2">
              <button
                onClick={() => navigate('/newpost')}
                className="flex justify-between items-center px-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
              >
                <AddIcon />
                <h4 className="p-2 ">Add Post</h4>
              </button>
            </div>
            <div className="flex flex-col">
              <label className="py-2">Title</label>
              <textarea
                type="text"
                name="title"
                value={formdata.title}
                className="p-5 h-20 border-2 border-gray-300 rounded-md resize-none overflow-hidden"
                onChange={handleChange}
                placeholder="Enter title"
              />
              <label className="py-2">Detail</label>
              <textarea
                type="text"
                name="body"
                value={formdata.body}
                onChange={handleChange}
                className="p-5 border-2 h-32 border-gray-300 rounded-md resize-none overflow-hidden"
                placeholder="Enter detail"
              />
            </div>
            <div className=" flex justify-end m-2 ">
              <div className=" p-2 flex justify-between ">
                <button
                  onClick={handleDelete}
                  className="flex justify-between items-center px-2 mx-2 text-white bg-red-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <DeleteIcon />
                  <h4 className="p-2 ">Delete</h4>
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex justify-between items-center  px-2 mx-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <ModeIcon />
                  <h4 className="p-2 ">Update</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdatePost

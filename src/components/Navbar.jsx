import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import NotificationsIcon from '@mui/icons-material/Notifications'
import WindowIcon from '@mui/icons-material/Window'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from 'react'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { posts, loading } = useSelector((state) => state.posts)

  return (
    <nav className="px-10 py-5 sticky">
      <div className="flex justify-between p-3 shadow-md bg-white">
        <div className="w-1/2 flex items-center">
          <div className="p-2 font-bold text-2xl cursor-pointer">
            <Link to="/">Arbit Blog</Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <div onClick={() => navigate('/')} className="px-3 cursor-pointer">
            <Badge badgeContent={loading ? '...' : posts.length} color="info">
              <h6 className="p-2 font-bold">Posts</h6>
            </Badge>
          </div>
          <div className="px-3 cursor-pointer">
            <IconButton>
              <NotificationsIcon color="black" />
            </IconButton>
          </div>
          <div className="px-3 cursor-pointer">
            <IconButton>
              <WindowIcon color="black" />
            </IconButton>
          </div>
          <div className="px-3 cursor-pointer">
            <IconButton>
              <Avatar>
                <img src="https://avatars.githubusercontent.com/u/79707353?v=4" alt="profile" />
              </Avatar>
            </IconButton>
          </div>
        </div>
      </div>
    </nav>
  )
}

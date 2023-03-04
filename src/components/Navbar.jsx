import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'

import NotificationsIcon from '@mui/icons-material/Notifications'
import WindowIcon from '@mui/icons-material/Window'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { useEffect } from 'react'
import Typography from '@mui/material/Typography'

export default function Navbar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const { posts, loading } = useSelector((state) => state.posts)

  return (
    <nav className="px-10 py-5 sticky">
      <div className="flex justify-between p-3 shadow-md bg-white">
        <div className="w-1/2 flex items-center">
          <div className="p-2 font-bold text-2xl cursor-pointer">
            <Link to="/">Arbit Blog</Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center max-sm:hidden">
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
        <div className="w-1/2 flex justify-end items-center sm:hidden">
          <IconButton onClick={handleOpenNavMenu} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center'
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' }
            }}
          >
            <MenuItem
              onClick={handleCloseNavMenu}
              sx={{
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <h6 onClick={() => navigate('/')} className="">
                Posts
              </h6>
              <div onClick={() => navigate('/')} className="w-6 h-6 flex justify-center items-center bg-blue-600 rounded-full">
                <Typography variant="caption" color="white">
                  {loading ? '...' : posts.length}
                </Typography>
              </div>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/">Notifications</Link>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Link to="/">Profile</Link>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </nav>
  )
}

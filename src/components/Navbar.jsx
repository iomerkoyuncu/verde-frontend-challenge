import * as React from "react"
import IconButton from "@mui/material/IconButton"
import Badge from "@mui/material/Badge"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import NotificationsIcon from "@mui/icons-material/Notifications"
import WindowIcon from "@mui/icons-material/Window"

export default function Navbar() {
	return (
		<nav className='px-10 py-5 sticky'>
			<div className='flex justify-between p-3 shadow-md bg-white'>
				<div className='w-1/2 flex items-center'>
					<div className='p-2'>
						<PlayCircleOutlineIcon fontSize='large' />
					</div>
					<div className='p-2 font-bold text-2xl cursor-pointer'>
						Arbit Blog
					</div>
				</div>
				<div className='w-1/2 flex justify-end items-center'>
					<div className='px-3 cursor-pointer'>
						<Badge badgeContent={10} color='info'>
							<div className='p-2 text-md'>Posts</div>
						</Badge>
					</div>
					<div className='px-3 cursor-pointer'>
						<NotificationsIcon />
					</div>
					<div className='px-3 cursor-pointer'>
						<WindowIcon />
					</div>
					<div className='px-3 cursor-pointer'>
						<Avatar>
							<img
								src='https://avatars.githubusercontent.com/u/79707353?v=4'
								alt='profile'
							/>
						</Avatar>
					</div>
				</div>
			</div>
		</nav>
	)
}

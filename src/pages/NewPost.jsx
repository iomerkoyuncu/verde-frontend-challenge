import React from "react"
import { useNavigate } from "react-router-dom"

import WestIcon from "@mui/icons-material/West"
import { IconButton } from "@mui/material"

function NewPost() {
	const navigate = useNavigate()

	return (
		<div className='flex justify-center items-center font-bold px-10 py-5'>
			<div className='bg-white min-w-full shadow-md'>
				<div className='flex px-10 py-5'>
					<div className='flex items-center'>
						<IconButton
							sx={{
								color: "blue",
								"&:hover": {
									color: "blue",
								},
								backgroundColor: "#e0e0e0",
							}}
							onClick={() => navigate(-1)}>
							<WestIcon />
						</IconButton>
						<h1 className='p-3 text-xl'>Posts</h1>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewPost

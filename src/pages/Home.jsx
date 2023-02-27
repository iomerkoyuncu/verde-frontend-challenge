import React from "react"

import PostCard from "../components/PostCard"

function Home() {
	return (
		<div className='flex justify-center items-center font-bold px-10 py-5'>
			<div className='bg-white min-w-full shadow-md'>
				<div className='flex flex-wrap justify-center'>
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
					<PostCard />
				</div>
			</div>
		</div>
	)
}

export default Home

import React from "react"

function NotFound() {
	return (
		<div className='flex justify-center items-center font-bold px-10 py-5'>
			<div className='bg-white min-w-full shadow-md'>
				<div className='flex flex-col justify-center p-5'>
					<div className='p-5 flex justify-center items-center'>
						<h1 className='text-4xl p-2'>404</h1>
						<h1 className='text-2xl p-2'>Page Not Found :(</h1>
					</div>
					<div className='flex justify-center items-center'>
						<button className='flex justify-between items-center px-6 py-3 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<a href='/'>Go Back</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NotFound

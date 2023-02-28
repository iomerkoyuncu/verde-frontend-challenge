import React from 'react'

function PostCard(post) {
  return (
    <div className="w-96 p-2 m-5 flex flex-col shadow-md rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer">
      <h4 className="font-bold p-2 text-lg">{post.post.title}</h4>
      <p className="text-sm p-2 font-light text-justify">{post.post.body}</p>
    </div>
  )
}

export default PostCard

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { addPost } from '../features/postSlice'
import { client } from '../utils/client'

import PostCard from '../components/PostCard'
import AddIcon from '@mui/icons-material/Add'

function Home() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { posts } = useSelector((state) => state.posts)

  const getPosts = async () => {
    const { data } = await client.get('/posts?userId=1')
    localStorage.setItem('posts', JSON.stringify(data))
    data.forEach((element) => {
      dispatch(addPost(element))
    })
  }

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
              <div className="flex flex-col ">
                <button
                  onClick={() => getPosts()}
                  className=" px-2 m-2 text-white bg-red-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <h4 className="p-2 ">Get Posts Again!</h4>
                </button>
                <button
                  onClick={() => navigate('/newpost')}
                  className="flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer"
                >
                  <AddIcon />
                  <h4 className="p-2 ">Create New Post</h4>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home

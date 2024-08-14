import React from 'react'

export default function Inf2() {
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  const loadMorePosts = async () => {
    setLoading(true)
    const newPosts = await fetchPosts(page, 10)
    setPosts((prevPosts) => [...prevPosts, ...newPosts])
    setLoading(false)
  }

  useEffect(() => {
    loadMorePosts()
  }, [page])

  return (
    <div>
      <h1>Your Feed</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
    </div>
  )
}

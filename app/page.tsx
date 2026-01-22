type Post = {
  id: number
  title: string
  body: string
}

type FetchApiProps = {
  posts: Post[]
}

const FetchApi = ({ posts }: FetchApiProps) => {
  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
        </ul>
      ))}
    </div>
  )
}

export default FetchApi

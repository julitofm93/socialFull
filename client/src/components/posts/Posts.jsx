import "./posts.scss"
import Post from "../post/Post"

const Posts = () => {

  const posts = [
    {
        id: 1,
        name: "John Doe",
        profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id: 2,
        name: "John Doe",
        profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id: 3,
        name: "John Doe",
        profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
        id: 4,
        name: "John Doe",
        profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        img: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
]
  return (
    <div className="posts">
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts
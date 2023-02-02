import { useContext } from 'react'
import './comments.scss'
import {AuthContext} from "../../context/authContext"

const Comments = () => {

    const {currentUser} = useContext(AuthContext)

    const comments = [
        {
            userId: 1,
            id: 1,
            name: "John Doe",
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        },
        {
            userId: 2,
            id: 2,
            name: "John Doe",
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        },
        {
            userId: 3,
            id: 3,
            name: "John Doe",
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        },
        {
            userId: 4,
            id: 4,
            name: "John Doe",
            profilePic: "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
            desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis veniam quis veritatis? Ullam aperiam debitis voluptas, consectetur nesciunt hic minus quaerat repellat excepturi voluptate, distinctio quisquam eos laborum fugiat commodi.",
        },
    ]

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePic} alt="" />
            <input type="text" placeholder='write a comment' />
            <button>Send</button>
        </div>
        {comments.map(comment=>(
            <div className="comment">
                <img src={comment.profilePic} alt="" />
                <div className="info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                <span className='date'>1 hour ago</span>
            </div>
        ))
    }</div>
  )
}

export default Comments
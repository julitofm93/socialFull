import { useState } from "react"
import { Link } from "react-router-dom"
import "./register.scss"
import axios from "axios"

const Register = () => {

    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
        name:"",
    })

    const [err, setErr] = useState(null)

    const handleChange = e =>{
        setInputs(prev=>({...prev, [e.target.name]:e.target.value }));
    }

    const handleClick = async e =>{
        e.preventDefault()

        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs)
        } catch (err) {
            setErr(err.response.data)
        }
    }

    console.log(err)
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Julito Social.</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut voluptates natus deserunt sapiente delectus laborum consequuntur accusamus hic, aperiam reprehenderit nam officia corporis saepe ad fugiat quae qui fugit.
                </p>
                <span>Do you have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" placeholder="username" name="username" onChange={handleChange}/>
                    <input type="email" placeholder="email" name="email" onChange={handleChange}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange}/>
                    <input type="text" placeholder="name" name="name" onChange={handleChange}/>
                    {err && err}
                    <button onClick={handleClick}>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
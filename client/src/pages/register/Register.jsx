import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
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
                    <input type="text" placeholder="username"/>
                    <input type="email" placeholder="email"/>
                    <input type="text" placeholder="username"/>
                    <input type="text" placeholder="name"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
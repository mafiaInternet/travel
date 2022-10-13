import { useContext } from "react"
import { BsX } from 'react-icons/bs';
import ModelContext from "../content/ModelContext"

const Register = (props) =>{
    const {dispath} = useContext(ModelContext)
    return (
        <form>
            <div className="model__heading d-flex justify-content-between ">
                <h3>Create new account</h3>
                <span onClick={() => dispath({type: 'CLOSE_MODEL'})}><BsX></BsX></span>
            </div>
            <div className="group">
                <input className="group__controll" type='email' name='' placeholder="Email"></input>
            </div>
            <div className="group">
                <input className="group__controll" type='text' name='' placeholder="Enter Name"></input>
            </div>
            <div className="group">
                <input className="group__controll" type='password' name='' placeholder="Password"></input>
            </div>
            <div className="group d-flex justify-content-between ">
                <input className="" type='submit' name='' placeholder="Enter Name"
                value='Register'></input>
                <span onClick={() => dispath({type: 'OPEN_MODEL', payload: props.currentModel})}>Already have an account ?</span>
            </div>
        </form>
    )
}

export default Register;
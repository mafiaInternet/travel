import { useContext } from "react"
import ModelContent from "../content/ModelContext"


const Model = (props)=>{
    console.log(props)
    const {state, dispath} = useContext(ModelContent);
    const closeModel = (e) =>{
        if(e.target.getAttribute('class') === 'model'){
            dispath({type: 'CLOSE__MODEL'})
        }
    }
   
    return state.modelStatus && state.current === props.current ? (
    <div className="model" onClick={closeModel}>
            <div className="model__body">
               {props.children}
            </div>
    </div>): ('');
    
}

export default Model
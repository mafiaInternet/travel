import {useReducer} from 'react';
import ModelContext from '../ModelContext';
import ModelReducer from '../../reducers/ModelReducer';
const ModelProvider = (props) => {
     
      const [state, dispath] = useReducer(ModelReducer,{
        modelStatus: false,
        current: '',    
        });
    return (
        <ModelContext.Provider value={{
            state,
            dispath,
            
    }}>
          {props.children}
        </ModelContext.Provider>
        
    )
}

export default ModelProvider
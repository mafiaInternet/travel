
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import ModelProvider from "./content/provider/ModelProvider";
import NavProvider from './content/provider/NavProvider';
import DestinationsProvider from './content//provider/DestinationsProvider'
import SharedProvider from "./content/provider/SharedProvider";
import Details from "./Pages/Details";
import { useState } from 'react';



function App() {
  const [state, dispath] = useState({ modelStatus: false});
  const openModel = () => {
      dispath({modelStatus: true})
  }
  const closeModel = () => {
      dispath({modelStatus: false})
  }
  return (
  
   <Router>  
       <ModelProvider >
        <NavProvider>
       <DestinationsProvider>
       <SharedProvider>
        <Routes>
          <Route path='/' exact element={<Home></Home>}></Route>
          <Route path='/about' exact element={<About></About>}></Route>
          <Route path='/Details/:id' exact element={<Details></Details>}></Route>
        </Routes>
        </SharedProvider>
      </DestinationsProvider>
      </NavProvider>
       </ModelProvider>
   </Router>
   
  );
}

export default App;

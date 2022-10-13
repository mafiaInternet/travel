import { useContext, useState } from 'react';
import Header from '../Components/Header';
import Model from '../Components/Model';
import ModelContent from '../content/ModelContext';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../Components/destinations/Destinations';
import Contact from '../Components/Contact/Contact';
import Services from '../Components/services/Services';
import Reviews from '../Components/reviews/Reviews';
import Footer from '../Components/footer/Footer';
import Nav from '../Components/Nav';
function Home () {
    const {dispath} = useContext(ModelContent);
    
    const [text] = useState({
        heading: 'We are travel friends',
        pararaph: 'Come and join us we travel the most famous and beautifull places in the world',
    })
    
    const [registerModel] = useState('registerModel')
    const [loginModel] = useState('loginModel')
    return (
        <>
            <Header heading={text.heading} pararaph={text.pararaph} >
                <button className='btn-default' 
                onClick={() => dispath({type: 'OPEN_MODEL', payload: registerModel})}>
                Get Start
                </button>
                <Nav></Nav>
            </Header>
            <Model current={registerModel}>
                <Register currentModel={loginModel}></Register>
                
            </Model>
            <Model current={loginModel}>
                <Login currentModel={registerModel}></Login>
            </Model>
            
            <Destinations></Destinations>
            <Contact></Contact>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </>
    )
}

export default Home;
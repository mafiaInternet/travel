import { useState, useContext } from "react"
import Footer from "../Components/footer/Footer"
import Header from "../Components/Header"
import Nav from "../Components/Nav"
import ModelContent from '../content/ModelContext';

const About = () =>{

    const {dispath} = useContext(ModelContent);
    const [text] = useState({
        heading: 'We are travel friends',
        pararaph: 'Come and join us we travel the most famous and beautifull places in the world',
    })

    
    const [registerModel] = useState('registerModel')
    const [loginModel] = useState('loginModel')
    return(<>
         <Header heading={text.heading} pararaph={text.pararaph} >
                <button className='btn-default' 
                onClick={() => dispath({type: 'OPEN_MODEL', payload: registerModel})}>
                Get Start
                </button>
                <Nav></Nav>
            </Header>
        <div className="about">
            <div className="container">
                <div className="about__contents">
                    <div className="row">
                        <div className="col-12 col-xl-6 about__contents__left">
                            <img className="img-fluid" src="/assets/about/about.jpg"></img>
                        </div>
                        <div className="col-12 col-xl-6 about__contents__right">
                            <h4>About Us</h4>
                            <h2>world best travel agency company since 2005</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum temporibus vel, aliquid labore atque assumenda dolorem numquam? Atque sequi, similique modi libero nulla neque eligendi nobis tempora consequatur ipsum vitae explicabo blanditiis cupiditate quam, laborum voluptate fugit, fugiat natus facilis deserunt adipisci debitis voluptates cum. Officia eligendi ipsam architecto totam aut consequatur quas ratione laboriosam facilis molestiae officiis excepturi suscipit neque, doloremque sapiente dolor illum repellat vitae sed aspernatur! Praesentium sequi sunt incidunt facilis eligendi ratione omnis reiciendis harum architecto! Quidem provident optio accusantium vero inventore atque quos ipsa accusamus, nulla natus ad excepturi laudantium, tempora, non mollitia dolor. Nemo.</p>
                            <button className="btn btn-dark">GO BACK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}

export default About
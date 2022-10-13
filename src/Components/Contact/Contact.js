import ContactLeft from "./ContactLeft";
import ContactRight from "./ContactRight";

const Contact = () => {
    return <div className="contact">
        <div className="container">
            <div className="contact__contents">
                <div className="row">
                    <ContactLeft></ContactLeft>
                    <ContactRight></ContactRight>
                    
                </div>
               
            </div>
        </div>
    </div>
}

export default Contact;
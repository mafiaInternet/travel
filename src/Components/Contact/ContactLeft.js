const ContactLeft = () => {
    return(
    <div className="col-12 col-md-6 contact__contents__left">
        <h4>Contact Form</h4>
        <form>
            <div className="group">
                <input type="text" placeholder="Your name"></input>
            </div>
            <div className="group">
                <input type="email" placeholder="Your email"></input>
            </div>
            <div className="group contact__contents__left__textarea">
                <textarea  placeholder="Write your message, i have trouble"></textarea>
            </div>
            <div className="group">
                <button type="button" className="btn btn-dark">
                    SEND EMAIL 
                </button>
            </div>
        </form>
    </div>
    )
}

export default ContactLeft
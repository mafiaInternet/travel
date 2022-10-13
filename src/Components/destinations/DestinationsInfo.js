import DestinationDetails from "./DestinationDetails"

const DestinationsInfo = ({details}) => {
    return (
        <div className="destinationInfo">
            <div className="container">
                <h2 className="heading">Overview</h2>
                <div className="row">
                    <div className="col-8">
                        <p className="destinationInfo__p">{details.details}</p>
                    </div>
                </div>
                <h2>Good to know</h2>
                <div className="row">
                    <div className="col-8">
                       <DestinationDetails title='Language' text={details.language}></DestinationDetails>
                        <DestinationDetails title='Currency' text={details.currency}></DestinationDetails>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DestinationsInfo 
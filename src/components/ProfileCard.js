

let ProfileCard = (props) => {
    return (
        <div >
            <div className="card">
                <img src={props.img} className="card-img-top"/>
                <div className="card-body">
                    <h5>{props.name}</h5>
                    <h6>{props.twitterHandle}</h6>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
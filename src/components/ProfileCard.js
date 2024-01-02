
//destructured props object
let ProfileCard = ({img,name,twitterHandle,description}) => {

    return (
        <div >
            <div className="card">
                <img src={img} className="card-img-top"/>
                <div className="card-body">
                    <h5>{name}</h5>
                    <h6>{twitterHandle}</h6>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
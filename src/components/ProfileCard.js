
//destructured props object
let ProfileCard = ({img,name,twitterHandle,description}) => {

    return (
        <div >
            <div className="card">
                <img src={img} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{twitterHandle}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
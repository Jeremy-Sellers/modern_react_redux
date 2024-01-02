import ProfileCard from "./components/ProfileCard";

let App = () => {
    const amazonMsg = 'We used to sell books but now we sell everything';
    const googleMsg = 'We track billions of google searches';
    const facebookMsg = 'Yeah we have all of your data';
    const imgUrl = 'https://placehold.jp/150x150.png';
    return (
        <div className="container">
            <h2>Personal Digital Assistants</h2>
           <ProfileCard img={imgUrl} name={'Amazon'} twitterHandle={'Bezos'} description={amazonMsg}/>
            <ProfileCard img={imgUrl} name={'Google'} twitterHandle={'Gaggle'} description={googleMsg}/>
            <ProfileCard img={imgUrl} name={'Facebook'} twitterHandle={'TheZuck'} description={facebookMsg}/>
        </div>
    )
}

export default App;
"use strict";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const userCard = {
    imageUrl:
      "https://i.pinimg.com/736x/36/a2/57/36a2572dc02c7da9b7050c813840a320.jpg",
    firstName: "Amanda",
    lastName: "Taylor",
    position: "Model",
    isFemale: true
  };
  return (
    <article className="cardUser">
      <ComponentUser
        src={userCard.imageUrl}
        userName={`${userCard.firstName} ${userCard.lastName}`}
        userPosition={userCard.position}
        isFemale={userCard.isFemale}
      />
      <UserButton />
      <UserSocial />
    </article>
  );
}

function ComponentUser(props) {
  const { src, userName, userPosition,isFemale } = props;
 
  const userColor = isFemale ? 'wight': 'rgb(27, 27, 27)';
  return (
    <>
      <img src={src} alt="Model"></img>
      <div className="cardUserName" style={{color:userColor}}>{userName}</div>
      <div className="cardUserPosition">{userPosition}</div>
    </>
  );
}


function UserButton() {
  return <button className="cardUserButton">+</button>;
}

function UserSocial() {
  return (
    <div className="social">
      <div>
        <span className="socialInfo">Views</span>
        <span className="socialСalculation">1388</span>
      </div>
      <div>
        <span className="socialInfo">Like</span>
        <span className="socialСalculation">970</span>
      </div>
      <div>
        <span className="socialInfo">Followers</span>
        <span className="socialСalculation">554</span>
      </div>
    </div>
  );
}

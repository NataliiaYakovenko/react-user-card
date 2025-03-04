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
    isFemale: true,
    socialStats: {
      views: 1388,
      like: 970,
      followers: 554,
    },
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
      <UserSocial socialStats={userCard.socialStats} />
    </article>
  );
}

function ComponentUser(props) {
  const { src, userName, userPosition, isFemale } = props;

  const userColor = isFemale ? "white" : "rgb(27, 27, 27)";
  return (
    <>
      <img src={src} alt="Model"></img>
      <div className="cardUserName" style={{ color: userColor }}>
        {userName}
      </div>
      <div className="cardUserPosition">{userPosition}</div>
    </>
  );
}

function UserButton() {
  return <button className="cardUserButton">+</button>;
}

function UserSocial(props) {
  const { socialStats } = props;
  return (
    <div className="social">
      <div>
        <span className="socialInfo">Views</span>
        <span className="socialСalculation">{socialStats.views}</span>
      </div>
      <div>
        <span className="socialInfo">Like</span>
        <span className="socialСalculation">{socialStats.like}</span>
      </div>
      <div>
        <span className="socialInfo">Followers</span>
        <span className="socialСalculation">{socialStats.followers}</span>
      </div>
    </div>
  );
}

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
  };
  return (
    <article className="cardUser">
      <ComponentUser
        src={userCard.imageUrl}
        userName={`${userCard.firstName} ${userCard.lastName}`}
        userPosition={userCard.position}
      />
    </article>
  );
}

function ComponentUser(props) {
  const { src, userName, userPosition } = props;
  return (
    <>
      <img src={src} alt="Model"></img>
      <div className="cardUserName">{userName}</div>
      <div className="cardUserPosition">{userPosition}</div>
      <button className="cardUserButton">+</button>
      <div className="social">
        <div>
          <span className="socialInfo">Views</span>
          <span className="socialСalculation">988</span>
        </div>
        <div>
          <span className="socialInfo">Like</span>
          <span className="socialСalculation">700</span>
        </div>
        <div>
          <span className="socialInfo">Dislike</span>
          <span className="socialСalculation">68</span>
        </div>
      </div>
    </>
  );
}

import React from "react";
import TinderCard from "react-tinder-card";

const onSwipe = (direction) => {
  console.log("You swiped: " + direction);
};

const onCardLeftScreen = (myIdentifier) => {
  console.log(myIdentifier + " left the screen");
};

function Home() {
  return (
    <div>
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
      >
        Hello, World!
      </TinderCard>
    </div>
  );
}

export default Home;

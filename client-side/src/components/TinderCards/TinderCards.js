import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Vladimir Putin",
      url: "https://www.aljazeera.com/wp-content/uploads/2021/05/2021-05-02T062847Z_415845406_RC2I7N99I2KK_RTRMADP_3_RELIGION-EASTER-RUSSIA-MASS.jpg?resize=770%2C513"
    },
    {
      name: "Janez Ivan Jansa",
      url: "https://cdn.kme.si/public/images-cache/806xX/2015/10/15/c5b34383841843db10d59dda76699c45/5e57e09762ec7/c5b34383841843db10d59dda76699c45.jpeg"
    }

  ]);


  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
import React from "react";
import { card, front, cardPhoto, back } from "./CardCharacter.module.css";
import BackTitleTag from "./BackTitleTag.jsx";

const CardCharacter = (props) => {
  const { img, name, portrayed, occupation, status } = props.Actor;
  return (
    <div className={card}>
      <div className={front}>
        <img src={img} alt={name} className={cardPhoto} />
      </div>
      <div className={back}>
        <BackTitleTag Title={"Character"} Value={name} />
        <BackTitleTag Title={"Occupation"} Value={occupation} />
        <BackTitleTag Title={"Status"} Value={status} />
        <BackTitleTag Title={"Played By"} Value={portrayed} />
      </div>
    </div>
  );
};

export default CardCharacter;

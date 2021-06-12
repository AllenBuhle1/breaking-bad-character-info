import React from "react";
import { actorsGrid } from "./ActorsGrid.module.css";
import CardCharacter from "./cardCharacter/CardCharacter";
import loadingIcon from "../img/loading.gif";

const ActorsGrid = ({ Actors, stillLoading }) => {
  return (
    <div className={actorsGrid}>
      {stillLoading ? (
        <img src={loadingIcon} alt="Loading..." />
      ) : (
        Actors.map((Actor) => <CardCharacter key={Actor.id} Actor={Actor} />)
      )}
    </div>
  );
};

export default ActorsGrid;

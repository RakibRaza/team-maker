import React from "react";
import "./Player.css";

import { FaPlus } from "react-icons/fa";

const Player = ({ player, addPlayer }) => {
  const { name, img, team, role, age, salary } = player;

  return (
    <div className="col-md-6">
      <article className=" single-player pt-1">
        <div className="player-img">
          <img src={img} alt={name} />
        </div>
        <div className="player-info text-center mt-3">
          <h3>{name}</h3>
          <h4 className="fw-bold">{team}</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Role :<strong>{role}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Salary :<strong>${salary}</strong>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Age :<strong>{age}</strong>
          </li>
        </ul>
        <div className="add-player text-center py-3">
          <button onClick={() => addPlayer(player)} className="add-btn">
            Add Player
            <span className="icon">
              <FaPlus />
            </span>
          </button>
        </div>
      </article>
    </div>
  );
};

export default Player;

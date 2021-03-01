import React, { useEffect, useState } from "react";
import "./Team.css";

import data from "../../data";
import Player from "../Player/Player";
import Squad from "../Squad/Squad";
import Modal from "../Modal/Modal";

const Team = () => {
  const [players, setPlayers] = useState([]);
  const [squad, setSquad] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState("");

  useEffect(() => {
    setPlayers(data);
  }, []);

  const addPlayer = (player) => {
    if (squad.includes(player)) {
      setIsModalOpen(true);
      setSelectedPlayer(player.name);
      return;
    }
    setSquad([...new Set([...squad, player])]);
  };

  const removePlayer = (id) => {
    setSquad(squad.filter((player) => player.id !== id));
  };

  const closeModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <main className="container py-5">
      <section className="row ">
        <aside className="col-lg-3 order-lg-1">
          <Squad removePlayer={removePlayer} squad={squad} />
        </aside>

        <div className="col-lg-9">
          <div className="row gy-4">
            {players.map((player) => (
              <Player addPlayer={addPlayer} key={player.id} player={player} />
            ))}
          </div>
        </div>

        {isModalOpen && (
          <Modal closeModal={closeModal} selectedPlayer={selectedPlayer} />
        )}
      </section>
    </main>
  );
};

export default Team;

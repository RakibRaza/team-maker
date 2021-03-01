import React from "react";
import "./Squad.css";

import { FaTrash } from "react-icons/fa";

const Squad = ({ squad, removePlayer }) => {
  const totalSalary = squad.reduce((acc, item) => acc + item.salary, 0);
  return (
    <div className="squad">
      <ul className="list-group mt-5">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Your Squad :<strong>{squad.length}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Total Salary :<strong>${totalSalary}</strong>
        </li>
      </ul>
      <h2 className="text-center fw-bold mt-4 squad-title">Your Squad!</h2>
      <div className="team">
        {squad.map((player) => {
          const { id, name } = player;
          return (
            <div
              key={id}
              className="squad-player d-flex justify-content-between"
            >
              <h5>{name}</h5>
              <button onClick={() => removePlayer(id)}>
                <FaTrash />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Squad;

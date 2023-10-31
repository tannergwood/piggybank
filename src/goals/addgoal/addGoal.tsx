import React, { useState } from "react";
import { Goal } from "../goalinterface";

interface GoalCreationPopupProps {
  onGoalCreate: (goal: Goal) => void;
  onClose: () => void;
}

const GoalCreationPopup: React.FC<GoalCreationPopupProps> = ({
  onGoalCreate,
  onClose,
}) => {
  const [money, setMoney] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [percentComplete, setPercentComplete] = useState<number>(0);
  const [child, setChild] = useState<string>("");

  const handleCreateGoal = () => {
    const newGoal: Goal = {
      id: Math.floor(Math.random() * 1000), // Generate a random ID (replace with appropriate ID generation logic)
      money,
      description,
      percentComplete,
      child,
    };
    onGoalCreate(newGoal);
    onClose();
  };

  return (
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create New Goal</h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
          ></button>
        </div>
        <div className="modal-body">
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="money" className="form-label">
                Goal Amount
              </label>
              <input
                type="number"
                className="form-control"
                id="money"
                value={money}
                onChange={(e) => setMoney(parseInt(e.target.value))}
              />
            </div>
            <div className="col-12">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="col-12">
              <label htmlFor="percentComplete" className="form-label">
                Percent Complete
              </label>
              <input
                type="number"
                className="form-control"
                id="percentComplete"
                value={percentComplete}
                onChange={(e) => setPercentComplete(parseInt(e.target.value))}
              />
            </div>
            <div className="col-12">
              <label htmlFor="child" className="form-label">
                Child
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={child}
                onChange={(e) => setChild(e.target.value)}
              />
            </div>
            <div className="justify-content-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleCreateGoal}
              >
                Create Goal
              </button>
            </div>
            <div className="justify-content-center">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GoalCreationPopup;

import React, { useState } from "react";
import GoalCreationPopup from "./addgoal/addGoal";
import { Goal } from "./goalinterface";

function Goals() {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [editedGoal, setEditedGoal] = useState<Goal | null>(null);
  const [editedMoney, setEditedMoney] = useState<number>(0);
  const [editedDescription, setEditedDescription] = useState<string>("");
  const [editedPercentComplete, setEditedPercentComplete] = useState<number>(0);
  const [editedChild, setEditedChild] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleGoalCreate = (newGoal: Goal) => {
    setGoals([...goals, newGoal]);
  };
  const handleDeleteGoal = (id: number) => {
    const updatedGoals = goals.filter((goal) => goal.id !== id);
    setGoals(updatedGoals);
  };
  const handleUpdateGoal = () => {
    if (editedGoal) {
      const updatedGoals = goals.map((goal) =>
        goal.id === editedGoal.id
          ? {
              ...goal,
              money: editedMoney,
              description: editedDescription,
              percentComplete: editedPercentComplete,
              child: editedChild,
            }
          : goal
      );
      setGoals(updatedGoals);
      setEditedGoal(null);
      setIsEditing(false);
    }
  };

  const handleEditGoal = (goal: Goal) => {
    setEditedGoal(goal);
    setEditedMoney(goal.money);
    setEditedDescription(goal.description);
    setEditedPercentComplete(goal.percentComplete);
    setEditedChild(goal.child);
    setIsEditing(true);
  };
  return (
    <>
      <div className="text-center">
        <h3>GOALS PAGE</h3>
      </div>
      <div className="container my-4">
        <div className="d-flex justify-content-center mb-3">
          <button
            className="btn btn-primary"
            onClick={() => setIsPopupOpen(true)}
          >
            Create New Goal
          </button>
        </div>
        {isPopupOpen && (
          <GoalCreationPopup
            onGoalCreate={(newGoal) => handleGoalCreate(newGoal)}
            onClose={() => setIsPopupOpen(false)}
          />
        )}
        <div className="mt-4 col-5 mx-auto text-center">
          {/* Render existing goals */}
          {goals.map((goal) => (
            <div key={goal.id} className="card my-2 p-3">
              <p>
                <span>
                  Child:{" "}
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    {goal.child}
                  </span>
                </span>
                <span>
                  {"    "}
                  Goal Amount:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {"$"}
                    {goal.money}
                  </span>
                </span>
              </p>
              <p>
                <span>
                  Desc:{" "}
                  <span style={{ fontWeight: "bold", marginRight: "20px" }}>
                    {goal.description}
                  </span>
                </span>
                <span>
                  Complete:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {goal.percentComplete}
                    {"%"}
                  </span>
                </span>
              </p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${goal.percentComplete}%` }}
                  aria-valuenow={goal.percentComplete}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              {isEditing ? (
                <>
                  <div
                    key={goal.id}
                    className="card my-2 p-3 mx-auto text-center"
                    style={{ width: "65%" }}
                  >
                    <div style={{ textAlign: "center" }}>
                      <label style={{ fontWeight: "bold" }}>
                        Goal Amount: {"  "}
                      </label>
                      <input
                        type="number"
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginBottom: "3px",
                        }}
                        value={editedMoney}
                        onChange={(e) =>
                          setEditedMoney(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <label style={{ fontWeight: "bold" }}>
                        Description:{" "}
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginBottom: "3px",
                        }}
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <label style={{ fontWeight: "bold" }}>Percentage: </label>
                      <input
                        type="number"
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginBottom: "3px",
                        }}
                        value={editedPercentComplete}
                        onChange={(e) =>
                          setEditedPercentComplete(parseInt(e.target.value))
                        }
                      />
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <label style={{ fontWeight: "bold" }}>Child: </label>
                      <input
                        type="text"
                        style={{
                          width: "50%",
                          marginLeft: "10px",
                          marginBottom: "12px",
                        }}
                        value={editedChild}
                        onChange={(e) => setEditedChild(e.target.value)}
                      />
                    </div>
                    {isEditing ? (
                      <div style={{ textAlign: "center" }}>
                        <button onClick={handleUpdateGoal}>Save</button>
                      </div>
                    ) : (
                      <div className="text-center mt-2">
                        <button
                          className="btn"
                          onClick={() => handleEditGoal(goal)}
                        >
                          <span
                            style={{ width: "55px", display: "inline-block" }}
                          >
                            Update
                          </span>
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteGoal(goal.id)}
                        >
                          <span
                            style={{ width: "50px", display: "inline-block" }}
                          >
                            Delete
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="text-center mt-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleEditGoal(goal)}
                    style={{
                      marginRight: "10px",
                      marginTop: "12px",
                    }}
                  >
                    <span style={{ width: "55px", display: "inline-block" }}>
                      Update
                    </span>
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteGoal(goal.id)}
                    style={{
                      marginTop: "12px",
                    }}
                  >
                    <span style={{ width: "50px", display: "inline-block" }}>
                      Delete
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Goals;

import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import DaysComponent from "./DaysComponent";
import NavComponent from "./NavComponent";

const WeeklyShowComponent = () => {
  // using useSelector hook for getting state from reducer
  let habitsState = useSelector((state) => state.habits);

  // getting habit from habits state acording to local storage id and set it on habit
  let habit = {}
  for (let i = 0; i < habitsState.length; i++) {
    if (habitsState[i].id === Number(localStorage.getItem("id"))) {
      habit = habitsState[i];
    }
  }

  return (
    <React.Fragment>
      <NavComponent name="7 Day View" />
      <h1 className="text-center habit-name" style={{ textTransform: "capitalize" }}>{habit.name}</h1>
      <div className="days-container d-flex justify-content-around flex-wrap">
        {habit.weekLog.map((day, index) => <DaysComponent day={day} key={index} />)}
      </div>
      <div className="d-grid gap-2 col-6 bg-primary mx-auto mt-2">
        <button className="btn btn-info" type="button">
          <Link to="/">Back to Habit Section</Link>
        </button>
      </div>
      </React.Fragment>
  );
};

export default WeeklyShowComponent;
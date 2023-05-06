import React from "react";
import { useDispatch } from "react-redux";
import { deletingHabit } from "../storeComponents/features";
import { useNavigate } from "react-router-dom";

const HabitComponent = ({ habit }) => {
  const today = new Date();
  const todayDay = today.getDay();
  let count = 0;

  //loop for total habit count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if (habit.weekLog[i].isDone === true) {
      count++;
    }
  }


  // dispatch hook to dispatch our actions
  const dispatch = useDispatch();

   // calling use navigate hook from react-router-dom from a navigate varriable 
   const navigate = useNavigate();

 // this function will call after user click on 7 day view button
  // this function is used to set current habit id to localstorage and navigate to weekview page
  const setId = () => {
    localStorage.setItem("id", habit.id)
    navigate("/7Dayview-view");
  }

   // function calling after user click delete button in habits
   const handleDelete = () => {
    dispatch(deletingHabit(habit.id));
    alert("your habit deleted successfully")
  }



  return (
    <div className="habit-container h-25 w-100 d-flex justify-content-between align-items-center">
      <div className="habit-left my-2 d-flex align-items-center">
        <i className="fa-solid fa-arrow-right"></i>
        <div>
          <h4 style={{ textTransform: "capitalize", color:"#f7f9fb" }}>{habit.name}</h4>
          <p className="fs-small text-primary">{count}/{todayDay + 1} days</p>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="dayView-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          7 Day View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default HabitComponent;
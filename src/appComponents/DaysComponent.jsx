import React from "react";
import { useDispatch } from "react-redux";
import { habitTrue, habitNone, habitFalse } from "../storeComponents/features";

const DaysComponent = ({day}) => {

  // getting today date
  const today=new Date();

  // getting current date from today
  const todaysDay=today.getDay();

  //  dispatch hook to dispatch our actions
  const dispatch=useDispatch();

  // getting date
  const date=new Date(day.yyyy,day.mm,day.dd);

 

  // function if task is false
  const handleTaskFalse=()=>{
    if(day.id>todaysDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitFalse(day.id))
  }

   // function if task true
   const handleTaskTrue=()=>{
    if(day.id>todaysDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitTrue(day.id));
  }

  // function for task none
  const handleNoneTask=()=>{
    if(day.id>todaysDay){
      alert("You cannot change your next days status")
      return;
    }
    dispatch(habitNone(day.id));
  }

  return (
    <div className="day-container text-center">
      <h5 className="text-center border-bottom mt-0">{day.day}</h5>
      <p className="text-center mb-1">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check mx-3 circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={handleTaskTrue}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark mx-3 circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={handleTaskFalse}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={handleNoneTask}></i>
    </div>
  );
};

export default DaysComponent;
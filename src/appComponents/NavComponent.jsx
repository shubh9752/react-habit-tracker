import React, {  useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addingHabit } from "../storeComponents/features";

const NavComponent = ({ name }) => {

  //  dispatch hook to dispatch our actions
  const dispatch = useDispatch();

  // changing state according to time
  const [hour, setHour] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);

  useEffect(() => {
    let time = new Date().toLocaleTimeString();
    setTimeout(() => {
      setTime(time);
    }, 1000);

  }, [time])


  // function for adding a new habit enter by user
  const handleHabit = () => {
    const habitName = document.getElementById("habitName").value;
    if (habitName.trim().length === 0) {
      alert("Please Enter Habit Name");
    }
    else {
      dispatch(addingHabit(habitName));
      alert("Your new habit is  added successfully");
      document.getElementById("habitName").value = "";
    }
  }

  return (
    <React.Fragment>
      <div className="nav align-items-center d-flex h-autojustify-content-sm-between justify-content-between flex-wrap   ">
        <h3 className="greeting fst-italic">
          {/* greeting the user according to time */}
          {hour <= 12
            ? "Its Morning"
            : hour <= 17
              ? "Good Afternoon"
              : hour <= 21
                ? " Good Evening"
                : "Go to sleep"}
          {" " + time}
        </h3>
        <div className="d-flex align-items-center mx-4 bg-danger">
          <h5 className=" text-warning">{name}</h5>
          <button
            className="addinghabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus "></i> Add New Habit
          </button>
        </div>
      </div>

      {/* modal to show  add a new habit  */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Habit Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleHabit}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
  );
};

export default NavComponent;
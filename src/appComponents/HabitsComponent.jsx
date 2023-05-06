import React from 'react'

import { useSelector } from "react-redux";
import HabitComponent from './HabitComponent';

const HabitsComponent = () => {

  // calling useselector hook to getting state from reducer
  let habitsState = useSelector((state) => state["habits"]);

  return (
    <div className='w-100'>
      {habitsState.map((habit) => <HabitComponent key={habit.id} habit={habit}  />)}
    </div>
  )
}

export default HabitsComponent;
import HomeComponent from "./appComponents/HomeComponent";
import WeeklyShowComponent from "./appComponents/WeeklyShowComponent";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
   
    <Routes>
      <Route path="/" element={<HomeComponent/>}/>
      <Route path="/7Dayview-view" element={<WeeklyShowComponent/>}/>
    </Routes>
 
     
    </>
  );
}

export default App;

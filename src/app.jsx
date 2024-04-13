import { useState } from "preact/hooks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./Components/LandingPage/LandingPage";
import SignupForm from "./Components/signup/SignUp";
import SigninForm from "./Components/Signin/SignIn";
import Home from "./Components/Home/Home";
import CalendarView from "./Components/Clanderdiv/ClanderView";
import NotesPage from "./Components/Notes/NotesPage";
import HistoryPage from "./Components/HistoryPage/HistoryPage";
import Knowledge from "./Components/Footer/Knowledge";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/mensural/" element={<LandingPage />} />
        <Route path="/mensural/home" element={<Home/>}/>
        <Route path="/mensural/signup" element={<SignupForm />} />
        <Route path="/mensurla/signin" element={<SigninForm />} />
        <Route path="/mensurla/Calendar" element={<CalendarView/>}/>
        <Route path="/mensurla/notes" element={<NotesPage/>}/>
        <Route path="/mensurla/safety" element={<HistoryPage/>}/>
        <Route path="/mensurla/facts" element={<Knowledge/>}/>
      </Routes>
    </Router>
  );
}

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/Calendar" element={<CalendarView/>}/>
        <Route path="/notes" element={<NotesPage/>}/>
        <Route path="/safety" element={<HistoryPage/>}/>
        <Route path="/facts" element={<Knowledge/>}/>
      </Routes>
    </Router>
  );
}

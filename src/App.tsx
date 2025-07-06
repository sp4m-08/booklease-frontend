import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Landing from "./Pages/Landing";
import Team from "./Pages/Team";
import Listings from "./Pages/Listings";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/team" element={<Team />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes here */}
      </Route>
    </Routes>
  );
};

export default App;

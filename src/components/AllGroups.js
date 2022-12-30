import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Group from "../pages/Group";
import GroupCards from "../pages/GroupCards";

function AllGroups() {

  return (
    <div>
         <Router>
        <Routes>
          <Route exact path="/" element={<GroupCards/>}/>          
          <Route exact path="/group/:name" element={<Group/>}/>          
      </Routes>
      </Router>
    </div>
  );
}

export default AllGroups;

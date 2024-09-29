import React from "react";
import Dashboard from "../components/Dashboard";
import { Route, Routes } from "react-router-dom";
import LostandFound from "../components/LostandFound";
import Reports from "../components/Reports/Reports";
import PostCategory from "../components/PostCategory/PostCategory";
import MemberInformation from "../components/MemberInformation/MemberInformation";
import MemberCredentail from "../components/MemberCredentail/MemberCredentail";
import UserManagement from "../components/UserManagement/UserManagement";

function LayoutRoutes() {
  return (
    <div className="app-routes">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/lostandfound" element={<LostandFound />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/postcategory" element={<PostCategory />} />
        <Route path="/memberinformation" element={<MemberInformation/>}/>
        <Route path="/membercredentail" element={<MemberCredentail/>}/> 
        <Route path="/usermanagement" element={<UserManagement/>}/> 
      </Routes>
    </div>
  );
}

export default LayoutRoutes;

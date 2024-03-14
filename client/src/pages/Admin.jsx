import React from "react";
import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/BigSidebar";
import { BigSidebar, Navbar, SmallSidebar } from "../components";

const Admin = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <h1>Admin page</h1>
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Admin;

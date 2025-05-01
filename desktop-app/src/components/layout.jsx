import React from "react";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <h1 className="text-red-500 bg-blue-400">Layout</h1>
      <Outlet />
    </div>
  );
}

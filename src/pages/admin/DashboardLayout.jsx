import React from "react";
import { AdminSideBar, AdminSidebarMobile } from "../admin/AdminSideBar";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <div className="hidden md:flex">
          <AdminSideBar />
        </div>
        <div className="flex-1 p-4">
          {/* <AdminSidebarMobile /> */}
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;

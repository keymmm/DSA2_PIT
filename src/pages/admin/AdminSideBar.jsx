import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Home, Menu, SquareDashedBottom } from "lucide-react";
import { Book, Users, LayoutDashboard } from "lucide-react";

const navItems = [
    { to: "/admin", label: "Dashboard", icon: <LayoutDashboard /> },
    { to: "/admin/books", label: "Books", icon: <Book /> },
    { to: "/admin/users", label: "Users", icon: <Users /> },
    { to: "/admin/categories", label: "Categories", icon: <SquareDashedBottom /> },
   
];

export const AdminSideBar = () => {
  const location = useLocation();

  return (
    <Sidebar>
        {/* <SidebarTrigger asChild className="hidden md:inline-flex"/> */}
      <SidebarHeader>
        <h1 className="text-xl font-bold">Admin Panel</h1>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          {/* <SidebarGroupLabel>Navigation</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.to}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.to}>
                    
                    <Link to={item.to}>
                    {item.icon}
                    
                    {
                    item.label}
                    
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Button variant="outline" className="w-full">
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export const AdminSidebarMobile = () => {
  return (
    <SidebarTrigger asChild>
      <Button variant="ghost" className="inline-flex md:hidden">
        <Menu className="h-6 w-6" />
      </Button>
    </SidebarTrigger>
  );
};

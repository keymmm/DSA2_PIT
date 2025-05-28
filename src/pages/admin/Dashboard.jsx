import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { BookOpen, Users } from "lucide-react";
import React from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const metrics = [
    {
      title: "Total Books",
      value: 180,
      change: "+12% from last month",
      changeType: "positive",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Active Members",
      value: 350,
      change: "+25% from last month",
      changeType: "positive",
      icon: <Users className="h-4 w-4" />,
    },
    {
      title: "Books Issued",
      value: 95,
      change: "-5% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Overdue Returns",
      value: 8,
      change: "+2% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Overdue Returns",
      value: 8,
      change: "+2% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
    {
      title: "Overdue Returns",
      value: 8,
      change: "+2% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
   
    {
      title: "Overdue Returns",
      value: 8,
      change: "+2% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
   
    {
      title: "Overdue Returns",
      value: 8,
      change: "+2% from last month",
      changeType: "negative",
      icon: <BookOpen className="h-4 w-4" />,
    },
   
  ]

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div >
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index} className="w-72">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{metric.title}</CardTitle>
              <div className="text-muted-foreground">{metric.icon}</div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${metric.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                {metric.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      <SidebarSeparator className='mt-8' />
      </div>
      
    </>
  );
};

export default Dashboard;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { BookOpen, Users } from "lucide-react";
import React, { use, useEffect } from "react";
import { set } from "react-hook-form";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [metrics, setMetrics] = React.useState([]);

  const fetchMetrics = async () => {
    const response = await fetch('http://localhost:3000/metrics', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error('Failed to fetch metrics');
    }
    const data = await response.json();
    setMetrics([
      {
        title: "Total Books",
        value: data.total_books,
        change: "+5%",
        changeType: "positive",
        icon: <BookOpen className="h-4 w-4" />,
      },
      {
        title: "Total Users",
        value: data.total_users,
        change: "+10%",
        changeType: "positive",
        icon: <Users className="h-4 w-4" />,
      },
      //toal categories
      {
        title: "Total Categories",
        value: data.total_categories,
        change: "+3%",
        changeType: "positive",
        icon: <BookOpen className="h-4 w-4" />,
      },
      //total authors
      {
        title: "Total Authors",
        value: data.total_authors,
        change: "+2%",
        changeType: "positive",
        icon: <Users className="h-4 w-4" />,
      },
    ]);
  }



  useEffect(() => {
    fetchMetrics()

  }, []);

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

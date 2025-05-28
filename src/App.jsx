import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books/Books";
import BorrowedBooks from "./pages/BorrowedBooks/BorrowedBooks";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import DashboardLayout from "./pages/admin/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import LogIn from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Users from "./pages/admin/users";
import BooksList from "./pages/admin/Books";
// import { AppSidebar } from "./pages/admin/AppSideBar";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <>
        <Route path="/auth/login" element={<LogIn />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="admin" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="books" element={<BooksList />} />
          <Route path="users" element={<Users />} />
          <Route path="categories" element={<h1>caategories books</h1>} />
        </Route> 
        {/* <Route path="hello"  element={<AppSidebar />} /> */}
        <Route
          path="/"
          element={<Layout />}
          errorElement={<h1>theres an error</h1>}
        >
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />

          <Route path="borrowed-books" element={<BorrowedBooks />}>
            <Route index element={<Modal />} />
            <Route path="cancel" element={<Modal />} />
            <Route path="approved" element={<h1>hello world</h1>} />
            <Route path="viewDetails/:id" element={<h1>query</h1>} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />


          <Route path="hello" element={<p>hello world</p>} />

        </Route>
      </>
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

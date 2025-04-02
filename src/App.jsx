import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  useLoaderData,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books";
import BorrowedBooks from "./pages/BorrowedBooks";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="DSA2_PIT"
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
        <Route path="*" element={<h1>404</h1>} />,
      </Route>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

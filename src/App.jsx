import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Books from "./pages/Books";
import BorrowedBooks from "./pages/BorrowedBooks";
import Layout from "./components/Layout";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/DSA2_PIT" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="books" element={<Books />} />

            <Route path="borrowed-books" element={<BorrowedBooks />}>
              <Route index element={<Modal />} />
              <Route path="cancel" element={<Modal />} />
              <Route path="approved" element={<h1>hello world</h1>} />
              <Route path="approved/:id" element={<h1>query</h1>} />
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <h1 className="flex justify-center ">
                kana nga page is not found
              </h1>
            }
          />

          {/* <Route path="/borrowed-books/:id" element={<BorrowedBooks />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

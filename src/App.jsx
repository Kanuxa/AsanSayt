import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useState } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Loading from "./components/Loading";
import { LoadingContext } from "./components/Loading/LoadingContext";

const Layout = ({ children }) => (
  <>
    <ScrollToTop />
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
  ]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <ToastContainer
        position="top-right"
        stacked
        newestOnTop={false}
        autoClose={3000}
        hideProgressBar={true}
      />

      <RouterProvider router={router} />

      {isLoading && <Loading />}
    </LoadingContext.Provider>
  );
}

export default App;

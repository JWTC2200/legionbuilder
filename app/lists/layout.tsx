import React from "react";
import { ToastContainer } from "react-toastify";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-screen-2xl w-full">
      <ToastContainer
        autoClose={1000}
        closeOnClick
        toastStyle={{
          backgroundColor: "#052e16",
          border: "white 2px solid",
          borderRadius: "5px",
          color: "#f0fdf4",
        }}
      />
      {children}
    </main>
  );
};

export default layout;

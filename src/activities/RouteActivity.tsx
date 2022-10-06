import { ActivityComponentType } from "@stackflow/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./MainActivity";

const MainActivity: ActivityComponentType = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainActivity;

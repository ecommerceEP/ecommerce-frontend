import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default App;

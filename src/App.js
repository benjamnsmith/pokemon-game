import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Information from "./Information";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Information />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

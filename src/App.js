import { render } from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Information from "./Information";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Information />} />
    //     <Route path="/" element={<Information />} />
    //   </Routes>
    // </BrowserRouter>
    <div className="stage">
      <div className="side one" grid-column-span="1 2">
        <Information />
      </div>
      <div className="middle" grid-column-span="2 3">
        <p color="white">VERSUS</p>
      </div>
      <div className="side two" grid-column-span="3 4">
        <Information />
      </div>
    </div>
  );
};

render(<App />, document.getElementById("root"));

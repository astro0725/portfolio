import './assets/css/tailwind.css'

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aside from "./components/Aside";

function App() {
  return (
    <>
      <Aside/>
      <div className="relative max-w-max m-auto min-w-3/4 w-3/4">
        <Navbar/>
        <section style={{
          scrollBehavior: "smooth"
        }}><Outlet/></section>
      </div>
    </>
  );
}

export default App;
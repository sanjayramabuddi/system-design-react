import { Outlet } from "react-router-dom";
import "./Body.css"

const Body = () => {
  return (
    <>
      <div className="main-body">Body</div>
      <div className="main-body">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Body;

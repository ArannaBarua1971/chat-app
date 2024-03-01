import React from "react";
import { Sidbar } from "./../Components";

function SidbarContainer(props) {
  return (
    <div
      id="sibbarContainer"
      className={`xl:w-[25%] md:w-[45%] w-[90%] md:relative absolute  top-0 md:left-0 ${
        props.showNavbar
          ? "left-0 z-10 bg-white "
          : "left-[-500px]"
      }   h-[100vh] flex`}
    >
      {/* sidbar section */}
      <Sidbar />
    </div>
  );
}

export default SidbarContainer;

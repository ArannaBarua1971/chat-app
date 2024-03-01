import React, { useState } from "react";
import SidbarContainer from "./Container/SidbarContainer";
import MainContainer from "./Container/MainContainer";
import { Button, ChatBox } from "./Components";

function Layout() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <>
      {/* Loayout for application */}

      {/* maincontent */}
      <div className="mainContent flex relative">
        {/* sidbar Container Section */}
        <SidbarContainer showNavbar={showNavbar} />

        {/* main container section */}
        <MainContainer>
          <ChatBox />
        </MainContainer>

        {/* navbar for modbile view */}
        <Button
          clasName=" md:hidden h-[5%] absolute z-50 right-[50px] top-0 text-black bg-white"
          onClick={(e) => setShowNavbar(!showNavbar)}
        >
          <i class="fa-solid fa-bars-staggered"></i>
        </Button>
      </div>
    </>
  );
}

export default Layout;

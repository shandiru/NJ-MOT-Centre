import React from "react";

// Sections from components/HomePage
import WheelTyreHero from "../Service/WheelTyreHero";
import WheelAlignmentServices from "../Service/WheelAlignmentServices";
import TyreServices from "../Service/TyreServices";
import WhyAlignmentSection from "../Service/WhyAlignmentSection";
import EmergencyCTA from "../Service/EmergencyCTA";

export default function Service() {
  return (
    <div>
      {/* Hero */}
      <section >
       {/* <WheelTyreHero /> */}
      </section>
         <section >
       {/* <WheelAlignmentServices /> */}
      </section>
        <section >
       <TyreServices />
      </section>
        <section >
       {/* <WhyAlignmentSection /> */}
      </section>

       <section >
       {/* <EmergencyCTA /> */}
      </section>





   
    </div>
  );
}

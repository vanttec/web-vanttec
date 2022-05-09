import React from "react";
import Footer from "../../components/Public/Footer/Footer";
import Aside from "../../components/Public/Aside/Aside";

export default function Home() {
  return (
    <>
      <div style={{ height: "85vh" }}>
        <Aside />
        <div style={{ margin: "0 0 0 7vw"}}>
          <h1>Home...</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

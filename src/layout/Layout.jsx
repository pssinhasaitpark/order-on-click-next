// Layout.jsx
import HeaderFirst from "../components/Header/index.jsx";
// import FooterComp from "./FooterComp";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/index.js";
import ScrollingGifBanner from "../components/ScrollingGifBanner/ScrollingGifBanner.jsx";
// import SubHeader from "../components/subHeader";

export default function Layout() {
  return (
    <>
      <HeaderFirst />
      {/* <SubHeader /> */}
      <Container>
        <Outlet />
      </Container>
      <ScrollingGifBanner />
      <Footer />
    </>
  );
}

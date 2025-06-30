import NavBar from "../organisms/NavBar";
import Intro from "../molecules/Intro";
import Operational from "../organisms/Operational";
import Menu from "../molecules/Menu";
import Booking from "../organisms/Booking";
import Footers from "../organisms/Footers";

export default function HomeTemplate() {
  return (
    <>
      <NavBar />
      <Intro />
      <Operational />
      <Menu />
      <Booking />
      <Footers />
    </>
  );
}
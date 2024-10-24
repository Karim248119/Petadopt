import Image from "next/image";
import Homepage from "./components/pages/Homepage";
import Pets from "./components/pages/Pets";
import Supporters from "./components/pages/Supporters";
import Journey from "./components/pages/Journey";
import How from "./components/pages/How";
import Carousel, { CarouselDefault } from "./components/pages/Slider";
import Comments from "./components/pages/Comments";
import Footer from "./components/pages/Footer";
import TopButton from "./components/pages/TopButton";
export default function Home() {
  return (
    <main className="">
      <Homepage />
      <Pets />
      <Supporters />
      <Journey />
      <How />
      <Comments />
      <Footer />
      <TopButton />
    </main>
  );
}

import Image from "next/image";
import style from "./home.module.css";
import Carousel from "@/components/carousel/Carousel";
export const metadata = {
  title: "Home | Projects Catalog | Yash Kumar Saini",
  description:
    "Experience a captivating showcase of 50 dynamic web projects, powered by a fusion of HTML, CSS, JavaScript, React, Angular, PHP, Firebase, MongoDB, SQL, Express.js, and Node.js. Explore a diverse range of stunning designs, interactive interfaces, and seamless functionalities. From responsive layouts to robust backends, my portfolio website demonstrates my mastery in leveraging cutting-edge technologies to deliver exceptional user experiences. Immerse yourself in the world of innovation and creativity as you explore my web projects that push the boundaries of what's possible on the digital frontier.",
  keywords:
    "Yash Kumar Saini, Yash K Saini, yashksaini, portfolio, web development, full-stack development, Yash Saini,projects",
};
const images = [
  {
    src: "/carousel/Background2.png",
  },
  {
    src: "/carousel/Background1.png",
  },
  {
    src: "/carousel/Background3.png",
  },
];

export default function Home() {
  return (
    <>
      <Carousel images={images} />
    </>
  );
}

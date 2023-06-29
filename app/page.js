// import Image from "next/image";
import styles from "./home.module.css";
import Carousel from "@/components/carousel/Carousel";
export const metadata = {
  title: "Home | Projects Catalog | Yash Kumar Saini",
  description:
    "Experience a captivating showcase of 50 dynamic web projects, powered by a fusion of HTML, CSS, JavaScript, React, Angular, PHP, Firebase, MongoDB, SQL, Express.js, and Node.js. Explore a diverse range of stunning designs, interactive interfaces, and seamless functionalities. From responsive layouts to robust backends, my portfolio website demonstrates my mastery in leveraging cutting-edge technologies to deliver exceptional user experiences. Immerse yourself in the world of innovation and creativity as you explore my web projects that push the boundaries of what's possible on the digital frontier.",
  keywords:
    "Yash Kumar Saini, Yash K Saini, yashksaini, portfolio, web development, full-stack development, Yash Saini,projects",
};
const images = [
  { src: "/carousel/Background2.png" },
  { src: "/carousel/Background1.png" },
  { src: "/carousel/Background3.png" },
];
const stats = [
  {
    title: "Projects",
    count: "50+",
  },
  {
    title: "Skills",
    count: "15+",
  },
  {
    title: "Dev Hours",
    count: "1000+",
  },
  {
    title: "Repositories",
    count: "60+",
  },
];
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Carousel images={images} />
        <div className={styles.contentBox}>
          <div className={styles.content}>
            <h1>Exploring My Creative Journey</h1>
            <div className={styles.smallHeading}>
              Personal projects that inspire
            </div>
            <div className={styles.searchBox}>
              <input type="text" placeholder="Search project by name..." />
              <button>Search</button>
            </div>
          </div>
          <div className={styles.stats}>
            {stats.map((stat, index) => {
              return (
                <div key={index} className={styles.eachStat}>
                  <span>{stat.count}</span>
                  <span>{stat.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

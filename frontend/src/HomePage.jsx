import { Link } from "react-router";
import '../styles/HomePage.scss'
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="leftpane">
        <h1>Welcome To Neutron!</h1>
        <h2>Capture ideas effortlessly. Our AI-powered app organizes, summarizes, and syncs your notes across devices. Stay productive with contextual search and automatic reminders. Start organizing smarter today!</h2>
        {/* <h2>Notes managed by AI, ... and more!</h2> */}
        <Link className="link_button" to={"/dashboard"}>Get Started</Link>
      </div>
      <div className="rightpane"><img className="right_image" src="\images\one.png"></img></div>
    </div>
  );
};

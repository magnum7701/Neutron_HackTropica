import { Link, Navigate } from "react-router";
import '../styles/HomePage.scss';
import { supabase } from './main';
import { useEffect, useState } from "react";


export const HomePage = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUserData(data.user);
        console.log(data);

        const {data: insertData, error :insertError} = await supabase
        .from('Users@neutron')
        .insert([
          {
            email:data.user.user_metadata.email,
            avatar:data.user.user_metadata.avatar_url,
            full_name:data.user.user_metadata.full_name,
            username:data.user.user_metadata.user_name
          }
        ])

        console.log(insertError);
      } else {
        console.error(error);
      }
      
    };

    fetchUser();

  }, []);


  if (userData) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="home-page">
      <div className="leftpane">
        <h1>Welcome To Neutron!</h1>
        <h2>Capture ideas effortlessly. Our AI-powered app organizes, summarizes, and syncs your notes across devices. Stay productive with contextual search and automatic reminders. Start organizing smarter today!</h2>
        <Link className="link_button" to={"/login"}>Get Started</Link>
      </div>
      <div className="rightpane"><img className="right_image" src="\images\one.png"></img></div>
    </div>
  );
};

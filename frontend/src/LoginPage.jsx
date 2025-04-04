import { useEffect, useState } from 'react';
import { supabase } from './main.jsx';
import { SignUpCard } from './SignUpCard.jsx';
import { Navigate } from 'react-router';

export const LoginPage = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUserData(data.user);
        console.log(data.user);
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
    <main className="main">
      <div className="logo-nav">
        <img src="./icons/logo.svg" alt="Logo" className="logo" />
      </div>
      <div className="pane">
        <div className="left-pane">
          <h1>Best Slolution For Note Making</h1>
          <p>All in one note taking place. Take all your notes and access them seamlessly</p>
        </div>
        {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt aliquid voluptatibus nostrum, nemo a quisquam quo illum corrupti et, sit quasi! Voluptatibus labore sunt rerum aut quibusdam fugit obcaecati!</div> */}
        <div className="right-pane">
          <SignUpCard />
        </div>
      </div>
    </main>
  );
};
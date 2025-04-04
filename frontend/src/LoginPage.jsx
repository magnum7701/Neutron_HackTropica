import { SignUpCard } from './SignUpCard.jsx'

export const LoginPage = () => {
  return (
    <main className="main">
      <div className="logo-nav">
        <img src="./icons/logo.svg" alt="Logo" className="logo"/>
      </div>
      <div className="pane">
        <div className="left-pane">
          <h1>Best Slolution For Note Making</h1>
          <p>All in one note taking place. Take all your notes and access them seamlessly</p>
        </div>
        {/* <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum deserunt aliquid voluptatibus nostrum, nemo a quisquam quo illum corrupti et, sit quasi! Voluptatibus labore sunt rerum aut quibusdam fugit obcaecati!</div> */}
        <div className="right-pane">
          <SignUpCard/>
        </div>
      </div>
    </main>
  );
};
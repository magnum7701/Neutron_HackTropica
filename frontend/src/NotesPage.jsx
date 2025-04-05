import { Link } from "react-router";
import { AllNotes } from "../components/AllNotes";
// import { useNavigate } from "react-router";
import "../styles/NotesPage.scss";

const NotesPage = () => {
  // const navigate = useNavigate();

  // const handleNotes = () =>{
  //   // navigate('dashboard/notes/newnote');
  // }
  return (
    <div className="notes-page">
      <div className="header">
        <h1>Your Notes</h1>
        <div className="add-and-account">
          <Link to={"/dashboard/notes/newnote"} className="new-button"></Link>
          <img src="/background/person.jpg" alt="" className="dp"/>
        </div>
      </div>
      <hr />
      <AllNotes />
    </div>
  );
};

export default NotesPage;
import { AllNotes } from "../components/AllNotes";
import "../styles/NotesPage.scss";

const NotesPage = () => {
  return (
    <div className="notes-page">
      <div className="header">
        <h1>Your Notes</h1>
        <div className="add-and-account">
          <button className="new-button"></button>
          <img src="/background/person.jpg" alt="" className="dp"/>
        </div>
      </div>
      <hr />
      <AllNotes />
    </div>
  );
};

export default NotesPage;
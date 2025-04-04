// import "../styles/NotesPage.scss";

import notes from "../api/notes";
import { SingleNote } from "./SingleNote";

export const AllNotes = () => {

  return (
    <div className="allnotes">
      {
        notes.map((item, idx) => (
          <SingleNote key={idx} title={item.title} content={item.content} date={item.createdOn} />
        ))
      }
    </div>
  );
};
import { Link } from 'react-router';

export const SingleNote = ({ title, content, date }) => {
  return (
    <Link to={`/dashboard/notes/${title}`} className="note">
      <div className="title-date">
        <div className="details">
          <h3>{title}</h3>
          <p>{date}</p>
        </div>
      </div>
      <p className="content">{content}</p>
      <button className="open">
        <img src="/icons/arrow.svg" alt="Arrow" />
      </button>
    </Link>
  );
};

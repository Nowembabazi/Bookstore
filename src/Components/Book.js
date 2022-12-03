import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

function Book(props) {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };

  return (
    <div className="booking">
      <div>
        <p className="category">Category</p>
        <h1>{title}</h1>
        <p className="author">{author}</p>
        <div className="btn">
          <button type="submit">Comments</button>
          <button onClick={handleSubmit} type="submit">Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
      <div className="read-on">
        <div className="first">
          <div className="prog" />
          <div className="read">
            <div className="round" />
            <div className="p-container">
              <p className="percentage">78%</p>
              <p className="com">Completed</p>
            </div>
          </div>
        </div>
        <div className="chapter-head">
          <h2>CURRENT CHAPTER</h2>
          <p>Chapter 12</p>
          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

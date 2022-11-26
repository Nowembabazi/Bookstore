import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;
  return (
    <div className="books-shelf">
      <h1>{title}</h1>
      <span>{author}</span>
      <button type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

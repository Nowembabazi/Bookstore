function AddNewBook() {
  return (
    <>
      <h2>Add New Book</h2>
      <form action="#">
        <input type="text" placeholder="Book Title.." />
        <input type="text" placeholder="Book Author.." />
        <button type="submit">ADD BOOK</button>
      </form>
    </>

  );
}

export default AddNewBook;

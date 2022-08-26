const DeleteModal = () => {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>delete this document?</h2>
        <p>
          Are you sure you want to delete the ‘welcome.md’ document and its
          contents? This action cannot be reversed.
        </p>
      </div>
      <button>confirm & Delete</button>
    </div>
  );
}

export default DeleteModal
const Comment = ({ name, email, onclick }) => {
  return (
    <div
      className="flex flex-col items-start justify-center w-auto h-auto bg-gray-200 rounded-lg shadow-lg p-3"
      onClick={onclick}
    >
      <p className="">name : {name}</p>
      <p> email : {email}</p>
    </div>
  );
};

export default Comment;

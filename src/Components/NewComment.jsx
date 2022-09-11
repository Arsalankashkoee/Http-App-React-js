// import axios from "axios";

import { useState } from "react";

const NewComment = ({ onAddPost }) => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });

  // const nameHandler = (e) => {
  //   setComment({ ...comment, name: e.target.value });
  // };
  // const emailHandler = (e) => {
  //   setComment({ ...comment, email: e.target.value });
  // };
  // const bodyHandler = (e) => {
  //   setComment({ ...comment, body: e.target.value });
  // };

  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  // body
  // const data = {
  //   name: comment.name,
  //   email: comment.email,
  //   body: comment.body,
  // };
  // const postCommentHandler = () => {
  //   // name,email,body , postID=10
  //   // creat =>
  //   // login ,signUp =>don't need header
  //   // order => cart , totalPrice ,...+user =>JWT(token header)
  //   // body ?
  //   // header ?
  //   axios
  //     .post("http://localhost:3001/comments/", {
  //       ...data,
  //       postId: 10,
  //     })
  //     .then((res) => console.log(res))
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="flex flex-col justify-center items-start w-full h-auto gap-7 bg-gray-200 rounded-lg shadow-lg p-5">
      {/* name */}
      <div>
        <label className="cursor-pointer" htmlFor="name">
          name :
        </label>
        <input
          type="text"
          id="name"
          placeholder="enter your name ..."
          className="focus:outline-none mt-2 py-1 px-3 rounded-lg shadow-lg  w-full border border-violet-500 focus:border-2"
          value={comment.name}
          name="name"
          onChange={changeHandler}
        />
      </div>
      {/* email */}
      <div>
        <label className="cursor-pointer" htmlFor="email">
          email :
        </label>
        <input
          type="email"
          id="email"
          placeholder="enter your email ..."
          className="focus:outline-none mt-2 py-1 px-3 rounded-lg shadow-lg w-full border border-violet-500 focus:border-2"
          value={comment.email}
          name="email"
          onChange={changeHandler}
        />
      </div>
      {/* body */}
      <div>
        <label className="cursor-pointer" htmlFor="body">
          body :
        </label>
        <textarea
          type="textarea"
          id="body"
          placeholder="enter your body ..."
          className="focus:outline-none mt-2 py-1 px-3 rounded-lg shadow-lg w-full  border border-violet-500 focus:border-2 resize-none"
          value={comment.body}
          name="body"
          onChange={changeHandler}
        />
      </div>
      <button
        className="bg-green-400 w-60 rounded-lg shadow-lg p-1"
        onClick={() => onAddPost(comment)}
      >
        Add new comment
      </button>
    </div>
  );
};

export default NewComment;

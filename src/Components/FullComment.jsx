import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const FullComment = ({ commentId, setSelectComment, setComments }) => {
  const [comment, setComment] = useState(null);
  // console.log(commentId);

  // get comment => id => async await => get full comment data

  useEffect(() => {
    if (commentId) {
      axios
        .get(`/comments/${commentId}`)
        .then((response) => {
          setComment(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [commentId]);

  // const deleteHandler = () => {
  //   axios
  //     .delete(`/comments/${commentId}`)
  //     .then((response) => {
  //       // console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  const deleteHandler = async () => {
    try {
      await axios.delete(`/comments/${commentId}`);
      const { data } = await axios.get("/comments/");
      setComments(data);
      setSelectComment(null);
      setComment(null);
      toast.success("delete successfully");
    } catch (error) {}
  };

  // commentId ?
  // comment ?

  let commentDetail = (
    <p className="my-7 p-5 w-full h-auto bg-gray-200 rounded-lg shadow-lg flex items-center justify-center">
      !! Please select a comment !!
    </p>
  );

  if (commentId)
    commentDetail = (
      // loading
      <div className="flex flex-col items-center justify-center ">
        <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
        <div className="mt-2 text-violet-800">loading</div>
      </div>
    );

  if (comment) {
    commentDetail = (
      <div className="flex flex-col justify-start items-start gap-y-3 p-5 w-full h-auto bg-gray-200 rounded-lg shadow-lg my-5">
        <p className="flex items-center ">
          <span>comment number :</span>
          <span className="bg-violet-600 p-1 w-6 h-6 rounded-full flex items-center justify-center text-gray-200 ml-3 ">
            {comment.id}
          </span>
        </p>
        <p>name : {comment.name} </p>
        <p>email : {comment.email}</p>
        <p>body : {comment.body} </p>

        <button
          className="bg-none border border-red-500 py-1 px-3 text-red-500 rounded-lg shadow-lg mt-5"
          onClick={deleteHandler}
        >
          delete
        </button>
      </div>
    );
  }

  return commentDetail;
};

export default FullComment;

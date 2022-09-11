import Comment from "./Comment";
import FullComment from "./FullComment";
import NewComment from "./NewComment";
// import { getAllComments } from "../Services/getAllCommentService";
import http from "../Services/httpServices";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const Discussion = () => {
  const [comments, setComments] = useState(null);
  // console.log(comments);
  // id
  const [selectComment, setSelectComment] = useState(null);
  const [error, setError] = useState(false);

  // how to get data?
  // useEffect => http request
  // CDM (Component Did Mount)=> get data

  // 200=>ok
  // 300 , 301 => redirect :SEO
  // 400=> 401=>unAuthorized ,402 , 403 => not access , 404 =>not found
  // 500 =>server

  useEffect(() => {
    // resolve(then) or reject(catch)
    // http
    //   .get("https://jsonplaceholder.typicode.com/comments")
    //   .then((response) => {
    //     // console.log(response.data);
    //     setComments(response.data.slice(0, 4));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // async - await
    const getComments = async () => {
      try {
        const response = await http.get("/comments");
        setComments(response.data);
      } catch (error) {
        // console.log(error);
        setError(true);
      }
    };
    getComments();
  }, []);

  const selectCommentHandler = (id) => {
    // console.log(id);
    setSelectComment(id);
  };

  const postCommentHandler = (comment) => {
    http
      .post("/comments/", {
        ...comment,
        postId: 10,
      })
      .then((response) => http.get("/comments"))
      .then((response) => setComments(response.data))
      .catch((error) => console.log(error));
    toast.success("item was added successfully ");
  };

  const renderComment = () => {
    let renderedValue = (
      // loading
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-b-2 border-violet-900 rounded-full animate-spin mt-2"></div>
        <div className="mt-2 text-violet-800">loading</div>
      </div>
    );

    if (error) {
      renderedValue = <p>fetching data failed !!!</p>;
      // console.log(error);
      toast.error("There is an error !");
    }

    if (comments && !error) {
      renderedValue = comments.map((c) => (
        <Comment
          key={c.id}
          name={c.name}
          email={c.email}
          onclick={() => selectCommentHandler(c.id)}
        />
      ));
    }

    return renderedValue;
  };

  return (
    <main className="">
      {/* comment */}
      <section className="flex items-center justify-center gap-5 flex-wrap ">
        {renderComment()}
      </section>
      {/* full-comment */}
      <section className="flex items-center justify-center">
        <FullComment
          commentId={selectComment}
          setSelectComment={setSelectComment}
          setComments={setComments}
        />
      </section>
      {/* new-comment */}
      <section className="flex items-center justify-center">
        <NewComment onAddPost={postCommentHandler} />
      </section>
    </main>
  );
};

export default Discussion;

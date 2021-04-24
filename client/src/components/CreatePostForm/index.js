import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_POST, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function CreatePostForm() {
  const titleRef = useRef();
  const questionRef = useRef();
  const answerRef = useRef();
  const [state, dispatch] = useStoreContext;;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.saveQuiz({
      title: titleRef.current.value,
      questions: questionRef.current.value,
      answers: answerRef.current.value
    })
      .then(result => {
        dispatch({
          type: ADD_POST,
          post: result.data
        });
      })
      .catch(err => console.log(err));

    titleRef.current.value = "";
    questionRef.current.value = "";
    answerRef.current.value = "";
  };

  return (
    <div>
      <h1>Create a Quiz!</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
        {/* <textarea className="form-control mb-5" required ref={questionRef} placeholder="Body" />
        <input className="form-control mb-5" ref={answerRef} placeholder="Screen name" /> */}
        <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
          Save Quiz
        </button>
      </form>
    </div>
  );
}

export default CreatePostForm;
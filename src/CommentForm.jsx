import { useState } from "react";
 import { Formik } from 'formik';
  import { useFormik } from 'formik';
import Comment from "./Comment";

export default function CommentForm({ addNewComment }) {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: "5",
  });
// const formik = useFormik({
//      initialValues: {
//        firstName: '',
//        lastName: '',
//        email: '',
//      },
//      onSubmit: values => {
//        alert(JSON.stringify(values, null, 2));
//      })


  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    addNewComment(formData);
    setFormData({
      username: "",
      remark: "",
      rating: "",
    });
  };
  return (
    <div>
      <h3>Give A Comment!</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          placeholder="Username"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remark">ReMark</label>
        <textarea
          placeholder="Write a remark"
          id="remark"
          name="remark"
          value={formData.remark}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button>Add A Comment</button>
      </form>
    </div>
  );
}

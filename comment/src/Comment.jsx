// import { useState } from "react";
 import { useFormik } from 'formik';
import "./Comment.css";


const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'username cannot be empty';
   } 
   return errors;
 };

function Comment({dispComment}) {
  // const [formData, setFormData] = useState(
  //   {
  //     username:"",
  //     remark: "",
  //     rating: null,
  //   },
  // );

    const formik = useFormik({
    initialValues: {
      username: "",
      remark: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      dispComment({
        ...values,
        rating: Number(values.rating),
      });

      formik.resetForm();
    },
  });



  // function handleInputChange(event) {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // }

  // function handleSubmit(event) {
  //   console.log(formData);
  //   dispComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //       username:"",
  //       remark:"",
  //       rating:5,
  //   })
  // }

  return (
    <form onSubmit={formik.handleSubmit}>
      <h3>Add Comments</h3>

      <label htmlFor="username">Username :</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
      />
      {formik.errors.username && (
        <p style={{ color: "red" }}>{formik.errors.username}</p>
      )}

      <br />

      <label htmlFor="remark">Remarks :</label>
      <input
        type="text"
        id="remark"
        name="remark"
        value={formik.values.remark}
        onChange={formik.handleChange}
      />

      <br /><br />

      <label htmlFor="rating">Rating :</label>
      <input
        type="number"
        min={1}
        max={5}
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
      />

      <br /><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Comment;
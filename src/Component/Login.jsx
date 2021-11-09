import React from "react"; 
import {useFormik} from "formik";
import * as yup from "yup";
const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          password: "",
        },
        onSubmit: (values) => console.log(JSON.stringify(values, null, 4)),
        validationSchema:yup.object({
          name:yup.string().required(),
          email:yup.string().email().required(),
            password:yup.string().required().min(8),
        })
      });
    return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{ padding: 20 }}>


      <label htmlFor="name" style={{ display: "block" }} >
      name
    </label>

    <input type="name" id="name" name="name"
     value={formik.values.name}
     onChange={formik.handleChange}
     />

     {formik.touched.name && formik.errors.name && 
      <div style={{color:"red"}}>{formik.errors.name}</div>}
  


      <label htmlFor="email" style={{ display: "block" }} >
          email
        </label>

        <input type="email" id="email" name="email"
         value={formik.values.email}
         onChange={formik.handleChange}
         />

  {formik.touched.email && formik.errors.email && 
    <div style={{color:"red"}}>{formik.errors.email}</div>}
        <label htmlFor="password" style={{ display: "block" }}>
        password</label>

        <input type="password" id="password" name="password"
         value={formik.values.password}
        onChange={formik.handleChange} onBlur={formik.onBlur}
        />

{formik.touched.password && formik.errors.password && 
    <div style={{color:"red"}}>{formik.errors.password}</div>}

        <button style={{ display: "block" }}>submit</button>
      </div>
    </form>
  );
};
export default LoginForm;

import "./Users.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { CommentsServices } from "../services/ApiServices";
// import "./App.css";
const Comments = () => {
  useEffect(() => {
    console.log("render");
  });

  const onSubmit = (data) => {
    console.log(data);
    CommentsServices(data);
  };

  const { handleSubmit, register } = useForm();

  return (
    <div className="wrapperForm">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label>
          Email:
          <input type="text" {...register("email")} />
        </label>
        <label>
          Password:
          <input type="password" {...register("password")} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Comments;

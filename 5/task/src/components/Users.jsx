import { useEffect } from "react";
import "./Users.css";
import { useForm } from "react-hook-form";
import { UserServices } from "../services/ApiServices";
// import "./App.css";
const Users = () => {
  useEffect(() => {
    console.log("render");
  });

  const onSubmit = (data) => {
    console.log(data);
    UserServices(data);
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

export default Users;

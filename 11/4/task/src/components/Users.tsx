import React, { useRef } from "react";
import "./Users.css";

const Users: React.FC = () => {
  const nameRef = useRef < HTMLInputElement > (null);
  const lastNameRef = useRef < HTMLInputElement > (null);
  const emailRef = useRef < HTMLInputElement > (null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current?.value,
        lastName: lastNameRef.current?.value,
        email: emailRef.current?.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="wrapperForm">
      <form onSubmit={handleSubmit} className="form">
        <label>
          Name:
          <input type="text" name="name" ref={nameRef} />
        </label>
        <label>
          Last name:
          <input type="text" name="lastName" ref={lastNameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Users;
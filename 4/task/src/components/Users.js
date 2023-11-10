import { useRef, useEffect } from "react";
import './Users.css'
// import "./App.css";
const Users = ()=>{
  const nameRef = useRef("")
  const lastNameRef = useRef("")
  const emailRef = useRef("")
  useEffect(() => {

  })
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("https://jsonplaceholder.typicode.com/users",
      {
        method: "POST", body: JSON.stringify({
          name: nameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value
        })
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    
  }



  return (
    <div className="wrapperForm">
      <form onSubmit={handleSubmit} className="form"  >
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
      </form >
    </div>
  )
 
}

export default Users
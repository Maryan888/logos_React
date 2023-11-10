import './Comments.css'
import { useRef, useEffect } from "react";

const Comemnts = () => {

  const nameRef = useRef("")
  const lastNameRef = useRef("")
  const emailRef = useRef("")
  useEffect(() => {

  })
  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://jsonplaceholder.typicode.com/comments",
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

export default Comemnts
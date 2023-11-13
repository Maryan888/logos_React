import axios from "axios";

export const UserServices = (data) => {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((resData) => console.log(resData));
}

export const CommentsServices = async () => {
  try {
    let response = await axios('http://jsonplaceholder.typicode.com/comments', { method: "POST", })

    console.log(response.data);
  }
  catch { }

}
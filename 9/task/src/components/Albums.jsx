import { useEffect } from "react";
// import "./Users.css";
import { AlbumsServices } from "../services/ApiServices";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/action/userActions";

const Albums = () => {
 
const albums = useSelector((store) => store.albumsReducer.albums);
const store = useSelector(store => store);
console.log(store);
const dispatch = useDispatch();
useEffect(() => {
  console.log("render");
  AlbumsServices(dispatch);
}, []);
userActions.setAlbums();
  return (
    <div className="wrapperForm">
      {albums.map((album) => {
        return album.id;
      })}
    </div>
  );
};

export default Albums;

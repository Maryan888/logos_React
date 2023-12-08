import { useEffect } from "react";
// import "./Users.css";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/action/userActions";
import { getAlbumsThunk } from "../redux/reducers/albumsReducer";


const Albums = () => {
 
const albums = useSelector((store) => store.albumsReducer.albums);
const store = useSelector(store => store);
console.log(store);
const dispatch = useDispatch();

const getAlbums = ()=> dispatch(getAlbumsThunk())
useEffect(() => {
  console.log("render");
  getAlbums()
  
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

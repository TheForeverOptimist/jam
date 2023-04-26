import "./App.css";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import FriendsList from "./FriendsList";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Login from "./Login.jsx";
import { auth, provider } from "./firebase";
import { useEffect } from "react";
import { login, logout } from "./features/userSlice";

export default function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("user is ", authUser);
      if (authUser) {
        //the user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        //the user is logged out
      }
    })
  }, [dispatch]);

  const signIn = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signOut = () => {
    auth.signOut()
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <main className="app">
      {user ? (
        <div className="container">
          <NavBar signOut={signOut} />
          <Sidebar />
          <Chat />
          <FriendsList />
        </div>
      ) : (
        <Login signIn={signIn} />
      )}
    </main>
  );
}


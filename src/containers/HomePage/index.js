import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style.css";
import Layout from "../../components/Layout";
import { useHistory, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getRealtimeUsers,
  updateMessage,
  getRealtimeConversations,
} from "../../actions";
import logo from "./logo.png";
import SideBar from "./SideBar";

const User = (props) => {
  const { user, onClick, activeTab, index } = props;

  return (
    <div style={{ margin: " 0 0 0 5rem" }}>
      {activeTab === "active members" ? (
        <div onClick={() => onClick(user)} className="displayName">
          <div className="displayPic">
            <img src={logo} alt="logo" />
          </div>
          <div
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "space-between",
              margin: "0 10px",
            }}
          >
            <span style={{ fontWeight: 500 }}>
              {user.firstName} {user.lastName}
            </span>
            <span
              className={user.isOnline ? `onlineStatus` : `onlineStatus off`}
            ></span>
          </div>
        </div>
      ) : activeTab === "support" && index <= 0 ? (
        <h5 style={{ padding: "1rem 1rem" }}>admin.chatCTadmin.com</h5>
      ) : (
        ""
      )}
    </div>
  );
};

const HomePage = (props) => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const [chatStarted, setChatStarted] = useState(false);
  const [chatUser, setChatUser] = useState("");
  const [message, setMessage] = useState("");
  const [userUid, setUserUid] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [activeBar, setActiveBar] = React.useState("active members");

  let unsubscribe;

  useEffect(() => {
    unsubscribe = dispatch(getRealtimeUsers(auth.uid))
      .then((unsubscribe) => {
        return unsubscribe;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //console.log(user);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //cleanup
      unsubscribe.then((f) => f()).catch((error) => console.log(error));
    };
  }, []);

  React.useEffect(() => {
    location.method && location.method === "sign-up"
      ? setOpen(true)
      : setOpen(false);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSurvey = () => {
    setOpen(false);
    // return <Redirect to={`/survey`} />;
    history.push("/survey");
  };

  const initChat = (user) => {
    setChatStarted(true);
    setChatUser(`${user.firstName} ${user.lastName}`);
    setUserUid(user.uid);

    console.log(user);

    dispatch(getRealtimeConversations({ uid_1: auth.uid, uid_2: user.uid }));
  };

  const submitMessage = (e) => {
    const msgObj = {
      user_uid_1: auth.uid,
      user_uid_2: userUid,
      message,
    };

    if (message !== "") {
      dispatch(updateMessage(msgObj)).then(() => {
        setMessage("");
      });
    }
  };

  return (
    <div>
      <Layout>
        <section className="container">
          <SideBar setActiveBar={setActiveBar} activeBar={activeBar} />

          <div className="listOfUsers">
            {user.users.length > 0
              ? user.users.map((user, index) => {
                  return (
                    <User
                      onClick={initChat}
                      key={user.uid}
                      user={user}
                      activeTab={activeBar}
                      index={index}
                    />
                  );
                })
              : null}
          </div>

          <div className="chatArea">
            <div className="chatHeader">
              Chatting with: {chatStarted ? chatUser : ""}
            </div>
            <div className="messageSections">
              {chatStarted
                ? user.conversations.map((con) => (
                    <div
                      style={{
                        textAlign:
                          con.user_uid_1 == auth.uid ? "right" : "left",
                      }}
                    >
                      <p className="messageStyle">{con.message}</p>
                    </div>
                  ))
                : null}
            </div>
            {chatStarted ? (
              <div className="chatControls">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
              </div>
            ) : null}
          </div>
        </section>
        <div>
          <Dialog
            disableBackdropClick
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Use Health Survey"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please take a minute to finish this survey to connect with other
                students that have similar answers. Please note all your answers
                will be confidential. Do you want to continue to the survey?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleSurvey} color="primary" autoFocus>
                Yes
              </Button>
              <Button onClick={handleClose} color="secondary">
                No
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;

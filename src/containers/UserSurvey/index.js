import React, { useEffect, useState } from "react";
import "../HomePage/style.css";
import Layout from "../../components/Layout";

import { useDispatch, useSelector } from "react-redux";
import { getRealtimeUsers } from "../../actions";
import logo from "../HomePage/logo.png";
import SurveyContent from "./surveyContent";

const HomePage = (props) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  // console.log("auth is", auth);
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

  return (
    <div>
      <Layout>
        <SurveyContent user={auth} />
      </Layout>
    </div>
  );
};

export default HomePage;

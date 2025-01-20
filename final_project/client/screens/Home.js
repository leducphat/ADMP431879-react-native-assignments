import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../redux/features/auth/userActions";

const Home = () => {
  const disptach = useDispatch();

  useEffect(() => {
    disptach(getUserData());
  }, [disptach]);

  return (
    <Layout>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { buildClient } from "../api/build-client";

buildClient;
const LandingPage = ({ currentUser }) => {
  return <h1>{`You are ${currentUser ? "" : "not"} signed in`}</h1>;
};

LandingPage.getInitialProps = async (context) => {
  console.log("Landing page");
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser/");
  return data;
};

export default LandingPage;

import { auth } from "../../config/firebase";

const NotFound = () => {
  console.log("auth", auth.currentUser);
  return <div>Unable to log you in</div>;
};

export default NotFound;

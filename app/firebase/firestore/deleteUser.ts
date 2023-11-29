import { getAuth } from "firebase/auth";

export const deleteUserAccount = () => {
  const user = getAuth().currentUser;
  user?.delete();
};

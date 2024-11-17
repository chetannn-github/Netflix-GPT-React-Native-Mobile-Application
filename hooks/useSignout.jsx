
import { auth } from "../scripts/firebase";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/userSlice";







const useSignout =() =>{
  const dispatch = useDispatch();
  let handleLogout = async() =>{
  try {
    await AsyncStorage.removeItem("loggedInUser");
  dispatch(removeUser());
  router.replace("/(auth)");
  console.log("logout ho gyaa broo");
  
  } catch (error) {
    console.log(error);
    
  }
  

}
  return handleLogout
    
}


export default useSignout;
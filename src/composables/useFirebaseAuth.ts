import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const useFirebaseAuth = () => {
  const { $auth } = useNuxtApp();

  const register = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        $auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        $auth,
        email,
        password,
      );
      const user = userCredential.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut($auth);
      await navigateTo("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    login,
    logout,
  };
};

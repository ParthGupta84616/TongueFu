import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-mGL2z5Wjj9n2y1gUlXS5MUEUyjUHYZw",
  authDomain: "tonguefu-18c07.firebaseapp.com",
  projectId: "tonguefu-18c07",
  storageBucket: "tonguefu-18c07.appspot.com",
  messagingSenderId: "441777426341",
  appId: "1:441777426341:web:ea2a840fd0dc3678c7224c",
  measurementId: "G-M2E5D9CC9F"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const authInstance = getAuth(app);

const AuthContext = createContext(); // Uncommented AuthContext creation

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(authInstance, (user) => {
        setUser(user);
      });
      return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
      try {
        const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
        navigate("/");
      } catch (error) {
        console.error("Error logging in:", error.message);
      }
    };

    const register = async (email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
        navigate("/");
      } catch (error) {
        console.error("Error registering:", error.message);
      }
    };

    const logout = async () => {
      // Implement logout logic here
    };

    return (
      <AuthContext.Provider value={{ user, login, register, logout }}>
        {children}
      </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

import { useState } from "react";
import firebase from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuth } from "../components/AuthContext";
import loginpic from "../assets/login.png"
// import { useNavigate } from "react-router-dom";

 // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-mGL2z5Wjj9n2y1gUlXS5MUEUyjUHYZw",
//   authDomain: "tonguefu-18c07.firebaseapp.com",
//   projectId: "tonguefu-18c07",
//   storageBucket: "tonguefu-18c07.appspot.com",
//   messagingSenderId: "441777426341",
//   appId: "1:441777426341:web:ea2a840fd0dc3678c7224c",
//   measurementId: "G-M2E5D9CC9F"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const authInstance = getAuth(app);

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth(); 
  // const Navigate = useNavigate();

  // const handleGoogleSignIn = () => {
  //   console.log("here");
  //   const provider = new GoogleAuthProvider();
  //   signInWithRedirect(authInstance, provider)
  //     .then((result) => {
  //       const user = result.user;
  //       console.log("Google Sign-in Successful:", user);
  //       // Navigate("/")
  //     })
  //     .catch((error) => {
  //       console.error("Google Sign-in Error:", error.message);
  //     });
  // };

  const handleSubmit = async(e) =>{
    e.preventDefault();
    try {
      await login(email, password);
      setEmail('');
      setPassword('');
      // Navigate("/")
      
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  }
  return(
    <div>
      
      <body class="bg-slate-900 text-slate-200">
        {/* Background gradients */}
        <div aria-hidden="true" class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
          <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
        </div>
        
        {/* Main content container */}
        <div className="flex justify-between">
        <div class="container flex flex-col mx-auto rounded-lg w-1/2  relative">
          {/* Login form */}
          <div class="flex justify-center w-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div class="flex items-center justify-center w-full lg:p-6">
              <div class="flex items-center xl:p-10">
                <form class="flex flex-col w-full h-auto pb-6 text-center  rounded-3xl">
                  <h3 class="mb-3 text-4xl font-extrabold text-dark-grey-900 text-white">Sign In</h3>
                  <p class="mb-4 text-slate-200">Enter your email and password</p>
                  
                  {/* Sign in with Google button */}
                  <button 
                  // onClick={handleGoogleSignIn}
                  class="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
                    <img class="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt=""/>
                    Sign in with Google
                  </button>
                  
                  {/* Divider */}
                  <div class="flex items-center mb-3">
                    <div class="h-0 border-b border-solid border-grey-500 grow"></div>
                    <p class="mx-4 text-grey-600">or</p>
                    <div class="h-0 border-b border-solid border-grey-500 grow"></div>
                  </div>
                  
                  {/* Email input */}
                  <label for="email" class="mb-2 text-sm text-start text-grey-900">Email*</label>
                  <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="mail@loopple.com" class="flex items-center w-full px-5 py-4 mr-2 text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-black rounded-2xl"/>
                  
                  {/* Password input */}
                  <label for="password" class="mb-2 text-sm text-start text-grey-900">Password*</label>
                  <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} class="flex items-center w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none focus:bg-grey-400 placeholder:text-grey-700 bg-grey-200 text-black rounded-2xl"/>
                  
                  {/* Remember me checkbox */}
                  <div class="flex flex-row justify-between mb-8">
                    <div className="">
                      <input type="checkbox" id="option1" name="option1" value="value1" className='mr-2' />
                      <label for="option1">Remember Me</label>
                    </div>
                    
                    {/* Forgot password link */}
                    <a href="javascript:void(0)" class="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
                  </div>
                  
                  {/* Sign In button */}
                  <button
                  onClick={handleSubmit}
                  class="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-slate-700 focus:ring-4 focus:ring-purple-blue-100 bg-slate-800">Sign In</button>
                  
                  {/* Create an account link */}
                  <p class="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="javascript:void(0)" class="font-bold text-grey-700">Create an Account</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <img src={loginpic} alt="" />
        </div>
        </div>
      </body>
    </div>
  );
}

export default Login;

"use client";

import { Thread } from "@/components/ui/assistant-ui/thread";
// import { Thread } from "@assistant-ui/react";
import SigninPage from "./(auth)/signin/page";
import SignUpPage from "./(auth)/signup/page";
import ForgotPage from "./(auth)/forgot/page";
import HomePage from "./home/page";
import StartLearning from "@/components/StartLearning";
import LevelPage from "./level/page";
import { useEffect } from "react";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";

export default function Home() {
  // useEffect(()=>{

  //   // try {
  //     const response =  axios.get(`${DOMAIN}/api/users/logout`);

  //   //   if (response.status === 200) {
  //   //     toast.success("Logout successful!");
       
  //   //   }
  //   // } catch (error: any) {
  //   //   const errorMessage = error?.response?.data?.message || "Login failed.";
  //   //   toast.error(errorMessage);
  //   // } 


  // },[]);
  return (
    <main className="h-full">
      {/* <Thread /> */}
      {/* <SigninPage/> */}
      {/* <SignUpPage/> */}
      {/* <ForgotPage/> */}
      <HomePage/>
      {/* <StartLearning/> */}
      
      {/* <LevelPage/> */}

    </main>
  );
}

import { Thread } from "@/components/ui/assistant-ui/thread";
// import { Thread } from "@assistant-ui/react";
import SigninPage from "./(auth)/signin/page";
import SignUpPage from "./(auth)/signup/page";
import ForgotPage from "./(auth)/forgot/page";
import HomePage from "./Home/page";
import StartLearning from "@/components/StartLearning";

export default function Home() {
  return (
    <main className="h-full">
      <Thread />
      {/* <SigninPage/> */}
      {/* <SignUpPage/> */}
      {/* <ForgotPage/> */}
      {/* <HomePage/> */}
      {/* <StartLearning/> */}
      

    </main>
  );
}

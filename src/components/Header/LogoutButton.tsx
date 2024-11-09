"use client";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
  const router = useRouter();
  const logoutHandler = async () => {
    try {
      await axios.get(`${DOMAIN}/api/users/logout`);
      router.push("/");
      router.refresh();
    } catch (error: any) {
      toast.warning(`Something went wrong:(${error.message})`);
      console.log(error);
    }
  };

  return (
    <>
      <button
        onClick={logoutHandler}
        className="ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
      >
        تسجيل الخروج
      </button>
    </>
  );
};

export default LogoutButton;

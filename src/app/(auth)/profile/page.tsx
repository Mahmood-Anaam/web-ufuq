// src\app\(auth)\profile\page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { DOMAIN } from "@/utils/constants";
import { toast } from "react-toastify";



interface UserProfile {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar?: string;
}


const ProfilePage: React.FC = () => {

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    avatar: "",
  });
  const router = useRouter();

  const id = 4;
  

  // Fetch user profile on page load
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/users/profile/${id}`);
        setProfile(response.data.profile);
        setFormData({
          username: response.data.profile.username,
          email: response.data.profile.email,
          avatar: response.data.profile.avatar || "",
        });
      } catch (error: any) {
        toast.error("Failed to load profile data.");
      }
    };
    fetchProfile();
  }, [id]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile update
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.put(`${DOMAIN}/api/users/profile/${id}`, formData);
      setProfile(response.data.user);
      toast.success("Profile updated successfully!");
    } catch (error: any) {
      toast.error("Failed to update profile.");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle profile deletion
  const handleDelete = async () => {
    try {
      await axios.delete(`${DOMAIN}/api/users/profile/${id}`);
      toast.success("Account deleted successfully!");
      router.replace("/home");
    } catch (error: any) {
      toast.error("Failed to delete account.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-white to-secondary dark:from-bg-color-dark dark:via-gray-900 dark:to-gray-dark py-12 flex items-center justify-center">
      <div className="w-full max-w-lg p-8 bg-white dark:bg-gray-dark rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-accent mb-6">حساب المستخدم</h2>
        {profile ? (
          <form className="space-y-6" onSubmit={handleUpdate}>
            <div className="flex flex-col items-center">
              {profile.avatar && (
                <img
                  src={profile.avatar}
                  alt="Avatar"
                  className="w-24 h-24 rounded-full mb-4"
                />
              )}
              <h3 className="text-xl font-semibold">{profile.username}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{profile.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-white">
                الاسم
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-white">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-white">
                رابط الصورة الشخصية
              </label>
              <input
                type="text"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                className="w-full p-3 mt-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:border-accent"
              />
            </div>
            <div className="flex justify-between mt-6">
              <Button type="submit" className="bg-accent text-white py-2 px-4 rounded-md" disabled={isLoading}>
                {isLoading ? "جارٍ التحديث..." : "تحديث"}
              </Button>
              <Button onClick={handleDelete} className="bg-red-500 text-white py-2 px-4 rounded-md">
                حذف الحساب
              </Button>
            </div>
          </form>
        ) : (
          <p className="text-center text-body-color dark:text-white">جاري تحميل البيانات...</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

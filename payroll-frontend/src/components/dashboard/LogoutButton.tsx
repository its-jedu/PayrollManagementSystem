"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear any saved auth token or session data
    localStorage.removeItem("token");
    sessionStorage.clear();

    // Redirect to login page
    router.push("/login");
  };

  return (
    <Button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md"
    >
      Logout
    </Button>
  );
}

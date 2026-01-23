"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const session = useSession();
  const menu = [
    { tittle: "Home", url: "../home" },
    { tittle: "About", url: "../about" },
    { tittle: "Contact", url: "../contact" },
    { tittle: "Products", url: "../products" },
  ];
  const handleSignOut = async () => {
    try {
      await signOut({
        callbackUrl: "/",
        redirect: true,
      });
    } catch (error) {
      console.error("Error signing out:", error);
      alert("An error occurred while signing out.");
    }
  };
  return (
    <div className="flex justify-between bg-blue-400 py-4 font-bold">
      <div>{session.data?.user?.email}</div>
      <div className="flex gap-4">
        {menu.map((item) => {
          return (
            <Link key={item.tittle} href={item.url}>
              {item.tittle}
            </Link>
          );
        })}
      </div>
      <div>
        <div className="cursor-pointer" onClick={handleSignOut}>
          Logout
        </div>
      </div>
    </div>
  );
}

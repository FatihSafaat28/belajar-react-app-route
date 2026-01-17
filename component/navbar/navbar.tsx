import Link from "next/link";
import React from "react";

export default function Navbar() {
  const menu = [
    { tittle: "Home", url: "/" },
    { tittle: "About", url: "about" },
    { tittle: "Contact", url: "contact" },
    { tittle: "Products", url: "products" },
  ];
  return (
    <div className="flex justify-between">
      <div>Icon</div>
      <div className="flex gap-4">
        {menu.map((item) => {
          return (
            <Link key={item.tittle} href={item.url}>
              {item.tittle}
            </Link>
          );
        })}
      </div>
      <div>Right Side</div>
    </div>
  );
}

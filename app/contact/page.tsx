import Link from "next/link";
import ButtonAction from "./_component/button-action";
import Navbar from "@/app/component/navbar/navbar";

export default function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Contact Page</h1>
        <ButtonAction />
        <Link href="/contact/1">Contact 1</Link>
      </div>
    </>
  );
}

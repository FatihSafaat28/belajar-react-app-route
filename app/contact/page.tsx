import Link from "next/link";
import ButtonAction from "./_component/button-action";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ButtonAction />
      <Link href="/contact/1">Contact 1</Link>
    </div>
  );
}

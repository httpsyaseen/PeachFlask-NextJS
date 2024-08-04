import { getUser } from "@/_data/user";
import { redirect } from "next/navigation";
import Signup from "./Signup";

export default async function LoginPage() {
  const user = await getUser();
  if (user?.id) return redirect("/");

  return <Signup />;
}

import { getUser } from "@/_data/user";
import { redirect } from "next/navigation";
import Login from "./Login";

export default async function LoginPage() {
  const user = await getUser();

  if (user?.id) return redirect("/");

  console.log(user);

  return <Login />;
}

import { getUser } from "@/_data/user";
import { redirect } from "next/navigation";

export default async function protectedLayout({ children }) {
  const user = await getUser();
  if (!user) return redirect("/login");

  return <>{children}</>;
}

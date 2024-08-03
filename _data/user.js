import { verifySession } from "@/lib/session";
import { dbHandler } from "@/lib/utils";
import User from "@/model/User";

function filteredUser(user) {
  const filterUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    address: user.address,
    phoneNumber: user.phoneNumber,
  };

  return filterUser;
}

export async function getUser() {
  return dbHandler(async () => {
    const session = await verifySession();
    if (!session?.id) return null;
    const user = await User.findById(session.id);

    return filteredUser(user);
  });
}

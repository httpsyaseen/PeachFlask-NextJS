"use server";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { getUser } from "@/_data/user";

export default async function Page() {
  const user = await getUser();
  console.log(user);

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 md:px-6 ">
      <div className="flex items-center gap-4 mb-8">
        <Avatar className="h-16 w-16">
          <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
          <AvatarFallback>PF</AvatarFallback>
        </Avatar>
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold">{user?.name}</h1>
          <p className="text-muted-foreground">{user?.email}</p>
        </div>
      </div>
      <div className="grid gap-8">
        <section>
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <input
                id="email"
                type="email"
                value={user?.name}
                placeholder="Jhon Doe"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <input
                id="email"
                type="email"
                value={user?.email}
                placeholder="name@example.com"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            {/* <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <input
                id="email"
                type="email"
                // value={"example@gmail.com"}
                placeholder="name@example.com"
                required
                minLength={6}
                className="mt-1 min-block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div> */}
          </div>
          <div className="mt-4">
            <Button className="bg-primary text-black">Save Changes</Button>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="current-password">Current Password</Label>
              <input
                id="password"
                type="password"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new-password">New Password</Label>
              <input
                id="new-password"
                type="password"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <input
                id="confirm-password"
                type="password"
                required
                minLength={6}
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:ring-primary focus:border-primary sm:text-sm focus:outline-primary"
              />
            </div>
          </div>
          <div className="mt-4">
            <Button className="bg-primary text-black">Change Password</Button>
          </div>
        </section>
        <section>
          <h2 className="text-lg font-semibold mb-4">Delete Account</h2>
          <p className="text-muted-foreground mb-4">
            Deleting your account is a permanent action and cannot be undone.
          </p>
          <Button variant="destructive">Delete Account</Button>
        </section>
      </div>
    </div>
  );
}

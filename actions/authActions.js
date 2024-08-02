"use server";

import { SignupFormSchema } from "@/lib/definition";
import { createSession, encrypt } from "@/lib/session";
import { dbHandler } from "@/lib/utils";
import User from "@/model/User";
import bcrypt from "bcrypt";

export async function signupUser(formData) {
  return dbHandler(async () => {
    //1. Validate Form Data
    const validatedFields = SignupFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    //2. Create User
    const hashPassword = await bcrypt.hash(validatedFields.data.password, 10);
    const user = await User.create({
      ...validatedFields.data,
      password: hashPassword,
    });

    //3.Create token or session
    await createSession(user._id);
  });
}

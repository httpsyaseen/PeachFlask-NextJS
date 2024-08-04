"use server";

import { LoginFormSchema, SignupFormSchema } from "@/lib/definition";
import { createSession, deleteSession, encrypt } from "@/lib/session";
import { dbHandler } from "@/lib/utils";
import User from "@/model/User";
import bcrypt from "bcrypt";

export async function signupUser(formData) {
  return dbHandler(async () => {
    //1. Validate Form Data
    const validatedFields = SignupFormSchema.safeParse(formData);

    if (!validatedFields.success) {
      return {
        validation: validatedFields.error.flatten().fieldErrors,
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

export async function loginUser(formData) {
  return dbHandler(async () => {
    //1. Validate Form Data
    const validFields = LoginFormSchema.safeParse(formData);

    if (!validFields.success) {
      return {
        status: "error",
        validation: validFields.error.flatten().fieldErrors,
      };
    }

    //2. check user exists
    const user = await User.findOne({ email: validFields.data.email }).select(
      "+password"
    );

    if (!user) {
      return {
        status: "error",
        error: "Invalid Email or Password",
      };
    }

    //3. check password is valid
    const isValidPassword = await bcrypt.compare(
      validFields.data.password,
      user.password
    );

    if (!isValidPassword) {
      return {
        status: "error",
        error: "Invalid Email or Password",
      };
    }

    //4. create session
    await createSession(user._id);

    return {
      status: "success",
    };
  });
}

export async function signOut() {
  deleteSession();
}

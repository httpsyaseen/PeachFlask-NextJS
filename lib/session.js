import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode("my-secret-key");

const cookie = {
  name: "session",
  options: {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
  },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(token) {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (err) {
    return {
      status: "error",
      error: err || "Something went wrong",
    };
  }
}

export async function createSession(id) {
  const expires = new Date(Date.now() + +(24 * 60 * 60 * 1000));
  const session = await encrypt({ id, expires });
  cookies().set("session", session, {
    httpOnly: true,
    secure: true,
    path: "/",
    sameSite: "lax",
    expires,
  });
}

export async function verifySession() {
  const cookie = cookies().get("session")?.value;
  const session = await decrypt(cookie);
  if (!session?.id) {
    return null;
  }
  return {
    id: session?.id,
  };
}

export async function deleteSession() {
  cookies().delete("session");
}

import { jwtVerify } from "jose";

export async function verifyToken(token: string) {
  if (!process.env.JWT_SECRET) return null;
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    return null;
  }
}

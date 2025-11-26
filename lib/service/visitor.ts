import { createVisitor, getVisitorByIP } from "../query/visitor";

export async function getOrCreateVisitor(ip: string, device: string) {
  const user = await getVisitorByIP(ip);

  if (user) return user;

  const newUser = await createVisitor(ip, device);
  return newUser;
}

import { sql } from "../neon";

export async function createVisitor(ip: string, device: string) {
  return sql`
    INSERT INTO Visitor (ip, device)
    VALUES (${ip}, ${device})
  `;
}

export async function getAllVisitors() {
  return sql`
    SELECT * FROM Visitor ORDER BY createdAt DESC
  `;
}

export async function getVisitorByIP(ip: string) {
  const result = await sql`
  SELECT * FROM Visitor WHERE ip = ${ip} LIMIT 1;
`;
  return result[0] || null;
}

export async function deleteVisitors() {
  return sql`
    DELETE FROM Visitor
  `;
}

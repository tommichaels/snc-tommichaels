import { Person } from "@/utils/common/person";
import { mockUsers } from "@/utils/server/mock-users";

import { prisma } from "../../../lib/prisma";

export const getPersonFromDB = async (person: Person) => {
  try {
    const user = await prisma.user.findFirst({
      where: {  profilePictureUrl: 'https://images.images.com/content.jpg' },
    });
    return user;
  } catch (error) {
    console.error("Error fetching user from DB:", error);
    // Handle error appropriately (e.g., return null or throw a custom error)
    return null; // Example placeholder for error handling
  } finally {
    await prisma.$disconnect(); // Disconnect from database after query
  }
};

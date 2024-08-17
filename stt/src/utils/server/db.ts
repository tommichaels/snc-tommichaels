import { Person } from "@/utils/common/person";
import { prisma } from "../../../lib/prisma";


export const getPersonFromDB = async (person: Person) => {
  try {
    const user = await prisma.user.findFirst({
      where: { name: person === Person.PersonA ? 'Bob Swagger' : 'Tim Bake' },
    });

    return user;
  } catch (error) {
    console.error("Error fetching user from database:", error);
    return null;
  }
};

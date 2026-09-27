import { db } from "@/lib/db/client";

export const filmService = {
  async getAllFilms() {
    return db.film.findMany({
      orderBy: { displayOrder: "asc" },
    });
  },
};

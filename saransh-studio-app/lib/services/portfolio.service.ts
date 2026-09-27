import { db } from "@/lib/db/client";

export const portfolioService = {
  async getAllProjects() {
    return db.portfolioProject.findMany({
      include: { category: true },
      orderBy: { displayOrder: "asc" },
    });
  },
  async getProjectBySlug(slug: string) {
    return db.portfolioProject.findUnique({
      where: { slug },
      include: { category: true, gallery: true },
    });
  },
};

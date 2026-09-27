import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, PortfolioCategory, Role } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log('Starting database seeding...')

  // 1. Seed Admin User (Stricter safety & conditional password preservation)
  const adminEmail = process.env.ADMIN_EMAIL
  const adminPassword = process.env.ADMIN_INITIAL_PASSWORD

  if (!adminEmail) {
    throw new Error('ADMIN_EMAIL is required for database seeding.')
  }

  if (!adminPassword) {
    throw new Error('ADMIN_INITIAL_PASSWORD is required for database seeding.')
  }

  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    const hashedPassword = await bcryptjs.hash(adminPassword, 12)
    const admin = await prisma.adminUser.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Saransh Studio Admin',
        role: Role.SUPER_ADMIN,
      },
    })
    console.log(`Created initial admin user: ${admin.email}`)
  } else {
    // Preserve existing password, update only profile/role if needed
    await prisma.adminUser.update({
      where: { email: adminEmail },
      data: {
        name: 'Saransh Studio Admin',
        role: Role.SUPER_ADMIN,
      },
    })
    console.log(`Admin user ${adminEmail} already exists. Preserved existing password and updated metadata.`)
  }

  // 2. Seed Portfolio Categories (Idempotent upsert)
  const categories = [
    { name: PortfolioCategory.WEDDING, slug: 'wedding', description: 'Timeless Indian wedding celebrations.' },
    { name: PortfolioCategory.COUPLES, slug: 'couples', description: 'Intimate couple portraits and storytelling.' },
    { name: PortfolioCategory.PRE_WEDDING, slug: 'pre-wedding', description: 'Scenic pre-wedding destination shoots.' },
    { name: PortfolioCategory.PORTRAITS, slug: 'portraits', description: 'Artistic editorial portraiture.' },
    { name: PortfolioCategory.CORPORATE, slug: 'corporate', description: 'Professional corporate and brand events.' },
    { name: PortfolioCategory.EVENTS, slug: 'events', description: 'Grand celebrations and social events.' },
    { name: PortfolioCategory.PRODUCT, slug: 'product', description: 'High-end commercial and product photography.' },
  ]

  for (const cat of categories) {
    await prisma.portfolioCategoryModel.upsert({
      where: { name: cat.name },
      update: {
        slug: cat.slug,
        description: cat.description,
        isActive: true,
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        isActive: true,
      },
    })
  }
  console.log('Upserted 7 portfolio categories.')

  // 3. Seed Site Settings (Verified Saransh Studio Data)
  await prisma.siteSetting.upsert({
    where: { id: 'default-settings' },
    update: {
      siteName: 'Saransh Studio',
      phone: '+91 90277 31570',
      whatsapp: 'https://wa.me/919027731570',
      email: 'contact@saranshstudio.com',
      address: 'Sadar Tehsil Main Rd, East Model Town, Gandhi Nagar, Pocket B, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001',
      googleMapsUrl: 'https://www.google.com/maps/place/Saransh+studio+ghaziabad/data=!4m2!3m1!1s0x0:0x9e1cb3a29bcda6fb',
      youtubeUrl: 'https://www.youtube.com/@saranshphotography',
      youtubeHandle: '@saranshphotography',
      footerText: 'Professional photography and cinematography studio based in Ghaziabad, Uttar Pradesh.',
    },
    create: {
      id: 'default-settings',
      siteName: 'Saransh Studio',
      phone: '+91 90277 31570',
      whatsapp: 'https://wa.me/919027731570',
      email: 'contact@saranshstudio.com',
      address: 'Sadar Tehsil Main Rd, East Model Town, Gandhi Nagar, Pocket B, Nehru Nagar III, Nehru Nagar, Ghaziabad, Uttar Pradesh 201001',
      googleMapsUrl: 'https://www.google.com/maps/place/Saransh+studio+ghaziabad/data=!4m2!3m1!1s0x0:0x9e1cb3a29bcda6fb',
      youtubeUrl: 'https://www.youtube.com/@saranshphotography',
      youtubeHandle: '@saranshphotography',
      footerText: 'Professional photography and cinematography studio based in Ghaziabad, Uttar Pradesh.',
    },
  })
  console.log('Upserted verified site settings.')

  // 4. Seed Social Links
  const socials = [
    { platform: 'YouTube', url: 'https://www.youtube.com/@saranshphotography', icon: 'youtube' },
    { platform: 'WhatsApp', url: 'https://wa.me/919027731570', icon: 'whatsapp' },
  ]

  for (const s of socials) {
    await prisma.socialLink.upsert({
      where: { platform: s.platform },
      update: { url: s.url, icon: s.icon },
      create: { platform: s.platform, url: s.url, icon: s.icon },
    })
  }
  console.log('Upserted social links.')

  console.log('Database seeding completed successfully.')
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

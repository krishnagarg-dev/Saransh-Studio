import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

if (!JWT_SECRET && process.env.NODE_ENV === 'production') {
  throw new Error('CRITICAL: JWT_SECRET environment variable is missing in production.')
}

const SECRET = JWT_SECRET || 'dev-unsafe-secret-key'
const JWT_EXPIRES_IN = '24h'

export async function hashPassword(password: string): Promise<string> {
  return bcryptjs.hash(password, 12)
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcryptjs.compare(password, hashedPassword)
}

export function generateToken(payload: object): string {
  return jwt.sign(payload, SECRET, { expiresIn: JWT_EXPIRES_IN })
}

export function verifyToken(token: string): any {
  try {
    return jwt.verify(token, SECRET)
  } catch (error) {
    return null
  }
}

export async function authenticateUser(email: string, password: string): Promise<{id: string, email: string, role: string} | null> {
  try {
    const { db } = await import('@/lib/db')
    const user = await db.adminUser.findUnique({
      where: { email },
    })

    if (!user) {
      return null
    }

    const isValid = await verifyPassword(password, user.password)
    if (!isValid) {
      return null
    }

    return {
      id: user.id,
      email: user.email,
      role: user.role,
    }
  } catch (error) {
    console.error('Authentication error:', error)
    return null
  }
}

export async function createInitialAdminUser(): Promise<void> {
  try {
    const adminEmail = process.env.ADMIN_EMAIL
    const adminPassword = process.env.ADMIN_INITIAL_PASSWORD

    if (!adminEmail || !adminPassword) {
      console.warn('Skipping initial admin creation: ADMIN_EMAIL or ADMIN_INITIAL_PASSWORD not provided.')
      return
    }

    const { db } = await import('@/lib/db')
    const existing = await db.adminUser.findUnique({
      where: { email: adminEmail },
    })

    if (!existing) {
      const hashedPassword = await hashPassword(adminPassword)
      await db.adminUser.create({
        data: {
          email: adminEmail,
          password: hashedPassword,
          name: 'Saransh Studio Admin',
          role: 'SUPER_ADMIN',
        },
      })
      console.log(`Initial admin user created: ${adminEmail}`)
    }
  } catch (error) {
    console.error('Error creating initial admin user:', error)
  }
}

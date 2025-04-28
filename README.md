# LeetCode App

A Next.js application for practicing LeetCode problems.

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- pnpm

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

3. Start the database:
```bash
docker-compose up -d
```

4. Start the development server:
```bash
pnpm run dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/leetcode?schema=public"

# NextAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

## Database Setup

1. Start the PostgreSQL database:
```bash
docker-compose up -d
```

2. Create and apply database migrations:
```bash
# Generate Prisma Client
pnpm prisma generate

# Create a migration
pnpm prisma migrate dev --name init
```

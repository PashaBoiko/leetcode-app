# LeetCode App

A Next.js application for practicing LeetCode problems.

## Prerequisites

- Node.js 18+ 
- Docker and Docker Compose
- pnpm

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd leetcode-app
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the database:
```bash
docker-compose up -d
```

4. Start the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Commands

Database management:
```bash
# Start containers in detached mode
docker-compose up -d

# Stop containers
docker-compose down

# Stop containers and remove volumes
docker-compose down -v

# View logs
docker-compose logs -f

# View logs for specific service
docker-compose logs -f postgres

# Restart services
docker-compose restart

# Show running containers
docker-compose ps

# Show container resource usage
docker-compose top

# Connect to database CLI
docker-compose exec postgres psql -U postgres -d leetcode_db
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/leetcode?schema=public"

# Auth configuration
ENABLE_GOOGLE_AUTH="true"
ENABLE_CREDENTIALS_AUTH="true"

# NextAuth configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Google OAuth credentials
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

## Database Connection Details

- Host: localhost
- Port: 5432
- Database: leetcode_db
- Username: postgres
- Password: postgres

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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

# Apply migrations to the database
pnpm prisma migrate deploy
```

3. (Optional) View your database with Prisma Studio:
```bash
pnpm prisma studio
```

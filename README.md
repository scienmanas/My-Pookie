# My Pookie

A web application for creating and managing dynamic pages with view tracking capabilities. Completely free, open-source, and no code tool. Enjoy!

## Running Locally

1. Clone the repository
2. Run `npm install` to install dependencies.
3. Run `npx prisma migrate` to create the database.
4. Create a `.env` file with the necessary environment variables (see below).
5. Run `npm run dev` to start the development server.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

| Variable                        | Value                                   | Description                               |
| ------------------------------- | --------------------------------------- | ----------------------------------------- |
| NODE_ENV                        | development, production                 | Environment mode for the application      |
| SITE_NAME                       | My Pookie                               | Name of the website                       |
| DOMAIN                          | localhost                               | Domain name for cookies and routing       |
| BASE_URL                        | http://localhost:3000                   | Base URL for server-side operations       |
| NEXT_PUBLIC_BASE_URL            | http://localhost:3000                   | Publicly accessible base URL              |
| DATABASE_URL                    | mongodb+srv://...                       | MongoDB connection string                 |
| G_ANALYTICS_ID                  | G-XXXXXXXXXX                            | Google Analytics tracking ID              |
| GOOGLE_CLIENT_ID                | client_id                               | Google OAuth client ID                    |
| GOOGLE_CLIENT_SECRET            | client_secret                           | Google OAuth client secret                |
| NEXT_PUBLIC_GOOGLE_CLIENT_ID    | client_id                               | Public Google OAuth client ID             |
| NEXT_PUBLIC_GOOGLE_REDIRECT_URI | http://localhost:3000/api/auth/callback | OAuth callback URL                        |
| ADMIN_EMAIL                     | xx@xxxxx.xxx                            | Administrator email for notifications     |
| ADMIN_APP_PASSWORD              | ____________                            | Application password for email operations |

## Features

- Create and manage dynamic pages
- View tracking and analytics
- Dashboard interface for managing pages
- SEO-friendly dynamic routes

## Project Structure

- `/app` - Next.js application routes and components
  - `/lib` - Helper functions
  - `/utils` - Utility functions
  - `congfig` - Configuration files and constants
  - `/api` - API routes for backend functionality
  - `/auth` - Authentication pages and components
  - `/ui` - Reusable UI components
  - `/dashboard` - Dashboard pages and components
  - `/pookie` - Dynamic page routes
- `/prisma` - Prisma schema and migrations
- `/public` - Public assets

## API Routes

- `/api/auth` - Authentication routes
- `/api/user` - User routes
- `/api/validate` - Validation route
- `/api/page` - Pookie Page routes

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

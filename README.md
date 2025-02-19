# Shortener App using SLAP Architecture
A REST API built with Node.js and TypeScript to generate a shorter url of a logn url.

## Prerequisites
- Node.js >= 20

## Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd url-shortener-backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Update .env with your credentials
```
DATABASE_URL=postgres://postgres:password@localhost:5432/shortener
PORT=8000
HOST=http://localhost:8000
```

5. Seed the database:
```bash
npm run db:seed
```

6. Start the development server:
```bash
npm run dev
```

The api server will run at http://localhost:8000

## API Endpoints
- `GET /api/shorteners` - List all the urls
- `POST /api/shorteners` - Generate a new short url
- `DELETE /api/shorteners/:id` - Delete a url
- `GET /api/shorteners/:short_url` - Redirect to full url
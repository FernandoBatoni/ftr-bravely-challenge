# Brev.ly - URL Shortener

URL shortener made for FTR Post Graduation

## Quick Start

- Node.js 22+
- bun package manager
- Docker and Docker Compose
- PostgreSQL 16 (or use Docker)

### Setup

- Run this for either web or server folder

```bash
cd <server / web>

bun install

docker-compose up -d # only for server

bun db:migrate # only for server

bun dev
```

The backend will be available at `http://localhost:4000`

The frontend will be available at `http://localhost:3000`

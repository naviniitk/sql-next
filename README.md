# Query SQL from Frontend

A simple Nextjs app which recieves SQL query as input and show the data on client.
The queries are restricted to be only `SELECT` so that no modification of data can happen from queries.

## Getting Started

First, run the development server:

Ensure Node version to be greater than 16.x

Run 
```bash
npm install
```

then run,

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Tech Stack

This project is built using below technologies

 - [Nextjs](https://nextjs.org/) for client facing
 - [pg](https://www.npmjs.com/package/pg), Library to connect and query the database.
 - [Supabase](https://supabase.com/), Platform for hosting the SQL databse.

## Performance

Performance tested via chrome devtools and it gives the following result

First Time Check:
![Page Load](/public/page-load-time.png)

To optimise the above time I had looked at the insights in chrome, it was suggesting to optimise the importing of few libraries, I removed node_modules and removed an extra dependency, then running again gave slightly better results but not sure if this is significant as this is a very small website.

Next Few Times Check:
![Page Load](/public/page-load-time-2.png)

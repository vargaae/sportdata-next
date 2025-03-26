# SportDATA Web App - Next JS | Typescript | API

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/sportdata-git.png" width="700" />
</div>
<br>
  <div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=next&color=61DAFB" alt="NextJS" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=06B6D4" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-React_TS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
<h1 align="center">
Sport App fetches data from different API-s about sport championships, matches like Football-data and News API.
</h1>
<h2 align="center"> 🚀 SPORTDATA APP with Football-data and News - Deployed to Vercel : </h2>
<p align="center"> (https://sportdata-next.vercel.app/)</p>

## 🛠 Features:

- Football Matches - Start time - finish time (REGULAR match time):
- Today Matches [TIMED]
- Live Matches [LIVE] | [IN_PLAY] | [PAUSED]
- Finished Matches (Today's and Yesterdays' matches)
- Finished Matches Scores
- Leagues filter for Matches with breadcrumbs navigation
- Sport News

## ▲ Next.js 14.1.4

## 🛠 Front End:

- React 18
- TypeScript
- TailwindCSS

## Setup Application

1. Clone this repo
2. In the project directory (cd sportdata-next) - Run `npm install`
3. Connect to [NEWS API](https://newsapi.org/) and [FOOTBALL DATA API](https://www.football-data.org/) -> You must add your own API key in the `.env` file to connect to get data from APIs.

You can grab NEWS API key [here](https://newsapi.org/register)
, you can grab FOOTBALL DATA API key [here](https://www.football-data.org/client/register)

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content and paste your API keys:

```env
NEWS_API_KEY=
FOOTBALL_DATA_API_KEY=
```

## Available Scripts

In the project directory, you can run:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
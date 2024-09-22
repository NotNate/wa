<h1 align="left">CHARTER ASSASSIN</h1>

<p>
  <a href="https://github.com/scornz/taj-assassin/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://github.com/scornz" target="_blank">
    <img alt="Github" src="https://img.shields.io/badge/GitHub-@scornz-blue.svg" />
  </a>
  <a href="https://linkedin.com/in/mscornavacca" target="_blank">
    <img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-@mscornavacca-blue.svg" />
  </a>
</p>

> An improved version of "Taj Assassin" originally created by Mike Scornavacca with upgraded UI and customization for Charter. Facilitates operations for the game of assassin for Princeton's Charter Club.

<p align="center">
  <img src="https://s6.gifyu.com/images/S6IB9.gif" alt="Scrolling through leaderboard" width="30%"/>
  <img src="https://s6.gifyu.com/images/S8sSB.gif" alt="Scrolling through admin portal" width="30%"/>
  <img src="https://s6.gifyu.com/images/S6mfG.gif" alt="Static view of safeties" width="30%"/>
</p>

## Requirements

- `yarn` ([download](https://classic.yarnpkg.com/lang/en/docs/install))
- MongoDB cluster ([create](https://www.mongodb.com/))
- Google developer account

## Setup

1.  Ensure requirements are installed correctly.
2.  Navigate to project folder.
3.  From root folder, call `yarn install`, to install all necessary packages for both `/frontend` and `/backend`.
4.  Create a `MongoDB` cluster [here](https://www.mongodb.com/). The free tier is fine.
5.  Create a Google developer account (if you don't already have one) and register an app for OAuth ([instructions](https://support.google.com/cloud/answer/6158849?hl=en#:~:text=Go%20to%20the%20Google%20Cloud%20Platform%20Console%20Credentials%20page.,to%20add%20a%20new%20secret.)).
6.  Create `.env` file in the `/backend` folder and fill in the required variables.

```
DB_USER=<name of MongoDB user>
DB_PASSWORD=<password of MongoDB user>
DB_HOST=<cluster url>
DB_PARAMS=<misc>

OAUTH_CLIENT_ID=<obtained from google dev console>
OAUTH_CLIENT_SECRET=<secret of oauth>

JWT_SECRET=<randomly generated key for JWTs>
JWT_REFRESH_SECRET=<randomly generated key for refresh JWTs>

ACTIVE__ID=<ID of the active game>

ALLOWED_ORIGINS=<comma separated list of origin addresses for CORS>

HOST=<address of the api>
FRONTEND_HOST=<address of the frontend, for redirections>
```

7. Call `yarn start` from the `/backend` folder. If this opens, your backend is configured correctly.
8. Ensure that the `BASE_URL` in `constants.tsx` points to `localhost`.
9. Call `yarn start` from the `/frontend` folder in order to spin up the local React app.
10. Prosper.

## License

Copyright © 2023 [Mike Scornavacca](https://github.com/scornz).<br />
This project is [MIT](https://github.com/scornz/taj-assassin/blob/main/LICENSE) licensed.

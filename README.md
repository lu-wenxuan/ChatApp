# Project Description

##  Project features:
This project is a web app for chatting. The project includes the following

- [x] Allow users to send and receive real-time messages, including text messages, image messages, etc.
- [x] Allow viewing messages and marking them as read.
- [x] Allow users to delete chat records.
- [x] Allow users to modify user information, including avatars and usernames.
- [x] Support Google and GitHub login
- [x] Display user online/offline status
- [x] Real-time one-on-one chat and group chat
- [x] Display server errors using the Toast
- [ ] Community functionality: Allow users to share multimedia content with the community and comment on other users' content.

## This project uses the following tech stack:
- Frontend: React, TypeScript, TailwindCSS
- Backend: NextJS, NextAuth, Prisma
- Database: MongoDB

## How to run this project:
### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
https://github.com/lu-wenxuan/chatapp.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
# ChatApp

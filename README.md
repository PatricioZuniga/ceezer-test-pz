# ceezer-test-pz
Code challenge to apply to Ceezer by Patricio Zuniga

### How to run

1. Install pnpm

    `npm install -g pnpm`

2. Install dependencies

    `pnpm install`

3. Run migrations & data feed

    `pnpx prisma migrate dev`

    `pnpx prisma db seed`

4. Run apps

    `pnpm run dev`

5. Go to http://localhost:3000/

### DB

The DB was created using *[Neon](https://neon.tech)* and the connection string is in `/apps/server/.env`

`.env` files were not gitignored for this reason.

### Missing parts

As you can see, the entire business logic is missing and the data is only displayed. This is because I lacked time to do anything more. If you'd prefer a complete solution, let me know and I'll give it a few more hours to finish, but I require some explanations like what are the user inputs and what's the desired output.

Tests are missing too, not for not wanting them but for time constraints as well.

In this exercise, 90% of the time I spent on research and making the project itself work with Nest + prisma + trpc + react (Next was excluded due to time constraints too).

Most of the time not used in research was used to make sure tRPC worked between back-end and front-end, which I'm not sure was the best idea to use, but the results are decent and I like the extra layer of type strictness.

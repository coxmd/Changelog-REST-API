import * as dotenv from "dotenv";
dotenv.config(); // Looks at env file and gets all environment variables - Added to index file because it is the entry file to our server

import app from "./server";

app.listen(3001, () => {
  console.log(`hello on http://localhost:3001`);
});

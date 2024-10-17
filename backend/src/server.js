import { app } from "./app.js";
import { PORT } from "./constant.js";
import { dbConnect } from "./config/db.js";

app.listen(PORT, async () => {
  await dbConnect();
  console.log(`the server is connected at ${PORT}`);
});

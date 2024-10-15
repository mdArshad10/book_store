import { app } from "./app.js";
const port = 3000;

app.listen(port,async ()=>{
    console.log(`the server is connected at ${port}`);
})
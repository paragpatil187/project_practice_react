const app = require("./app");
const connect = require("./configs/db");
const port = process.env.PORT || 3005 ;


app.listen(port, async ()=>{
    await connect();
    console.log(`listening to port ${port}`);
})
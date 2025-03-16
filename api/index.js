"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
// import env from "./util/validateEnv";
const port = process.env.PORT;
app_1.default.listen(port, () => {
    console.log(`starting the server at ` + port);
});
// mongoose
//   .connect(env.MONGO_CONNECTION_STRING)
//   .then(() => {
//     console.log("Mongoose connected successfully");
//     app.listen(port!, () => {
//       console.log(`starting the server at ` + port);
//     });
//   })
//   .catch(console.error);

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

// const mongoose = require("mongoose");

// const db =
//   "mongodb+srv://admin:admin@cluster0.b5ryid4.mongodb.net/test?retryWrites=true&w=majority";

// mongoose
//   .connect(db)
//   .then((res) => console.log("molodec"))
//   .catch((error) => console.log("loh"));

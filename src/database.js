import mongoose from "mongoose";
import config from "./config";
//funcion se llama asi misma
(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`Datababase is connected to: ${db.connection.name}`);
  } catch (error) {
    console.error(error);
  }
})();

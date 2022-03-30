import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from 'path'
import RecipesRoutes from "./routes/recipe.routes";

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);

//Middlewares
const corsOptions={}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
});
app.use("/api/v1/recetas", RecipesRoutes);

export default app;

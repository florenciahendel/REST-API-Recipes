import app from './app'
import './database'
//Server running
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

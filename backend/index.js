import "dotenv/config";

import { app } from "./server.js";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`o servidor esta rodando na porta : ${PORT}`);
});

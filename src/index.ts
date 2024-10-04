import express from "express"
import routes from "./routes"
import cors from "cors"	
import helmet from 'helmet';
import { serverConfig } from "@/config/server"
import  swaggerUi from 'swagger-ui-express';
import swaggerFile from '@/config/swagger/swagger-output.json';

const app = express()
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(serverConfig.port, serverConfig.host, () => {
  console.info(
    `Server running at: http://${serverConfig.host}:${serverConfig.port}`,
  );
});
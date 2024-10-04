interface ServerConfigType {
  protocol: string;
  host: string;
  port: number;
  staticUrl: string;
  staticPath: string;
  apiDocUrl: string;
}

const protocol = 'http://';
const host = 'localhost';
const port = 3000;
const staticPath = '/files';
const staticUrl = `${protocol}${host}:${port}${staticPath}/`;
const apiDocUrl = `${protocol}${host}:${port}${staticPath}/`;

export const serverConfig: ServerConfigType = {
  protocol,
  host,
  port,
  staticUrl,
  staticPath,
  apiDocUrl,
};

export default { serverConfig };
import cluster from "cluster";
import os from "os";
import { app } from ".";
const port = 3000;

const totalCpus = os.cpus().length;
if (cluster.isPrimary) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
} else {
  app.listen(port, () => {
    console.log(`app is listening on port ${port} ${process.pid}`);
  });
}

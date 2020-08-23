import * as express from 'express';
import {appFactory} from './app.factory';

async function start() {
    const expressApp = express()
    const app = await appFactory(expressApp);

    const port = 3000;
    await app.listen(port);

    console.log(`app listen port ${port}`);
}

start()
    .then(() => {
        console.log('complete bootstrapping services');
    })
    .catch((e) => {
        console.error('fail to bootstrap services');
        console.error(e);
    });

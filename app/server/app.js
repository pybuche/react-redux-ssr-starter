import path from 'path';
import express from 'express';

import { handleRender } from './render';


const app = express();

const publicDir = path.join(__dirname, '../../public');

app.use('/public', express.static(publicDir));

app.use(handleRender);

export default app;

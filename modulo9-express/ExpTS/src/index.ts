import express from 'express';
import morgan from 'morgan';
import logger from './middlewares/logger';
import router from './router/router';
import { engine } from 'express-handlebars';
import validateEnv from './utils/validadeEnv';

validateEnv();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(logger('simple'));
app.use(morgan('combined'));

//handlebarns config
app.engine(
  'handlebars',
  engine({
    helpers: require(`${__dirname}/views/helper/helper.ts`),
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: 'main',
  }),
);

app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/layouts`);
app.use('/js', [
  express.static(`${__dirname}/../public/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`),
]);
app.use('/img', express.static(`${__dirname}/../public/img`));
app.use('/css', express.static(`${__dirname}/../public/css`));

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.use((req, res) => {
  res.send('Error 404');
});

app.listen(PORT, () => {
  console.log(`Express app iniciado na porta ${PORT}.`);
});

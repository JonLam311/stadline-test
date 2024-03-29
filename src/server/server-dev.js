import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import fs from 'fs';
import config from '../../webpack.dev.config';

const app = express();
const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
	publicPath: config.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

// app.get('/404', (req, res, next) => {
// 	console.log('404');
// 	res.send('404');
// });

app.get('*', (req, res, next) => {
	fs.readFile(HTML_FILE, (err, result) => {
		if (err) return next(err);
		res.set('content-type', 'text/html');
		res.send(result);
	});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`App listening to ${PORT}....`);
	console.log('Press Ctrl+C to quit.');
});

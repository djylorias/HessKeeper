import { env } from 'node:process';
import express from 'express';
import http from 'http';
import { Server as IOServer } from 'socket.io';
import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';


// const GET_ALTERATION_REGULARITY_URL = "http://localhost:8080/alterationsRegularities"

// function afficherAlterationsRegularities() {

//     let element = document.querySelector(".alterationRegularities")

//     let html = '';

//     fetch("http://localhost:8080/alterationsRegularities")
//     .then(response => response.json())
//     .then(regularities => regularities.forEach( regularity => {
//         html += "<option value="+regularity.regularity+">"+regularity.name+"</option>";
//         element.innerHTML = html;
//     }))

// }

// afficherAlterationsRegularities()

const app = express();
const httpServer = http.createServer(app);
const port = env.PORT == null ? 8000 : env.PORT;

httpServer.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
})

const io = new IOServer(httpServer);

io.on('connection', socket => {
	console.log(`Nouvelle connexion du client ${socket.id}`);

	socket.on('disconnect', () => {
		console.log(`Déconnexion du client ${socket.id}`);
	})

});

addWebpackMiddleware(app);

app.use(express.static('client/public'));

app.get('/:path', (req, res) => {
	res.redirect(`/`);
});

import { env } from 'node:process';
import express from 'express';
import http from 'http';
// import { Server as IOServer } from 'socket.io';
// import addWebpackMiddleware from './middlewares/addWebpackMiddleware.js';


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

// addWebpackMiddleware(app);

app.use(express.static('client/public'));

app.get('/:path', (req, res) => {
	res.redirect(`/`);
});

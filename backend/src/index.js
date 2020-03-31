const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const routes = require('./routes');

//for development enviroment
app.use(cors());

/*for production enviroment
 app.use(cors({
 origin: 'http://linkdaaplicação.com'
}))
*/
app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

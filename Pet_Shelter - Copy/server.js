const express = require("express");
const cors = require('cors');
const app = express();
    
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({origin:'http://localhost:3000'}))
require("./server/config/mongoose.config");
    
const AllMyShelterRoutes = require("./server/routes/shelter.route");
AllMyShelterRoutes(app);
    
app.listen(8000, () => console.log("The server is listening on port 8000")); 
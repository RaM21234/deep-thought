import('node-fetch').then((nodeFetch) => {
    const fetch = nodeFetch.default;
    const express = require('express');
    const cors = require('cors');
   

    const PORT = 5000;
    const app = express();

    app.use(cors());
    const corsOptions = {
        origin: "http://localhost:3000"
    };

    const requestEndpoint = "http://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";

    app.get('/getData', cors(corsOptions), async (req, res) => {

        const response = await fetch(requestEndpoint);
        const jsonResponse = await response.json();
        res.json(jsonResponse);
    });

    app.listen(PORT, () => {
        console.log(`Example app listening at http://localhost:${PORT}`);
    });

});


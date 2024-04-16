const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello world!');
});

// Route to handle addition operation
app.get('/addnum/:n/:m', (req, res) => {
    // Extract parameters from the URL and perform addition
    const { n, m } = req.params;
    const result = Number(n) + Number(m);
    // Send the result as JSON
    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

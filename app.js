const express = require('express');
const path = require('path');
const app = express();
// Create Path




app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {

    res.sendFile('./public/Views/Home/index.html', { root: __dirname});

})

// Create the PORT

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
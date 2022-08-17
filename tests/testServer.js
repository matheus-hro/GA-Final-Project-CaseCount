const express = require('express');
const path = require('path')
const logger = require('morgan')
const apiRoutes = require('../routes/apiRoutes.js')
const app = express();

require('../config/database.js')
require('dotenv').config();

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
//app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" 
app.use('/api', apiRoutes);

// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});

useEffect(async () => {
  try {
    const fetchResponse = await fetch('/api/allArticles', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    })
    if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')
    let articleArray = await fetchResponse.json()
    let articleCount = articleArray.length
    console.log(articleArray);
    console.log(articleCount);
    } catch(err) {
        console.log("Error when fetching article: ", err)
    }
}, []);
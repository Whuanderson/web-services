  const express = require('express');
  const app = express();
  const PORT = 3010

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.listen(PORT, function() {
      console.log('server initialized ' + PORT);
  });

  require('./src/routes/index')(app)
const express = require('express');
const app = express();
app.get('/api/customers', (req, res) => {
  const customers = [
    { firstName: 'John', lastName: 'Doe' },
    { firstName: 'Steve', lastName: 'Smith' },
    { firstName: 'Mary', lastName: 'Swanson' },
  ];

  res.json(customers);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

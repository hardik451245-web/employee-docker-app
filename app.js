const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Sample employee data (in-memory)
const employees = [
  { id: 1, name: 'Rahul Sharma', empCode: 'E101', department: 'IT', designation: 'Software Engineer' },
  { id: 2, name: 'Priya Patil', empCode: 'E102', department: 'HR', designation: 'HR Manager' },
  { id: 3, name: 'Amit Joshi', empCode: 'E103', department: 'Finance', designation: 'Accountant' }
];

// Home page: styled HTML message
app.get('/', (req, res) => {
  res.send(`
    <div style="
      font-family: Arial, sans-serif;
      background-color: #eefaf1;
      padding: 20px;
      border: 2px solid #1e8449;
      border-radius: 8px;
      width: fit-content;
      margin: 40px auto;
      text-align: center;
      color: #145a32;
      font-size: 1.5em;
    ">
      <p>Employee API is running inside <strong>Docker!</strong></p>
      <p>Deployed using <strong>GitHub</strong> and Docker container.</p>
      <p><a href="/api/employees">View /api/employees</a></p>
    </div>
  `);
});

// REST API: all employees
app.get('/api/employees', (req, res) => {
  res.json(employees);
});

// REST API: employee by id
app.get('/api/employees/:id', (req, res) => {
  const emp = employees.find(e => e.id === parseInt(req.params.id));
  if (!emp) return res.status(404).json({ message: 'Employee not found' });
  res.json(emp);
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

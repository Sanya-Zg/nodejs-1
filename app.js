import express from 'express';
import tasks from './routes/tasks.js'
const app = express();

// middleware
app.use(express.json())
app.use('/api/v1/tasks', tasks);

app.get('/hello', (req, res) => {
    res.send('Task manager App');
})

const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
})

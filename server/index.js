import express from 'express';
import cors from 'cors';

const app = express();

// Middlewars
app.use(cors);
app.use(express.json());

app.listen(3001, () => {
    console.log('Server on port 3001');
});



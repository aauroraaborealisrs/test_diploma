const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user.routes');
const anthropometryRouter = require('./routes/anthropometry.routes');

const PORT = process.env.port || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', anthropometryRouter);

app.listen(PORT, () => console.log(`server started on ${PORT}`));

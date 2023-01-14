import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const PORT = process.env.PORT || 5000;
const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, '../public/build')));
// React
app.get('*', (req, res) => {
    res.writeHead(302, {
        'Location': '/projects/food-order/'
    });
    res.end();
});
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
//# sourceMappingURL=index.js.map
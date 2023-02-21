import express from 'express';
import { startGraphQLServer } from './libs/graph-ql';
const app = express();
const port = process.env.PORT || 8081;
app.get('/graph-ql', () => {
});
app.get('/', (req, res) => {
    return res.json({ title: 'hello' });
});
(async () => {
    await startGraphQLServer(port);
})();
//# sourceMappingURL=server.js.map
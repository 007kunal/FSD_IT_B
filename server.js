const http = require('http');
const fs = require('fs').promises;
const PORT = 3003;

const server = http.createServer((req, res) => {
    if (req.url === '/register' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                const { name, email, password } = JSON.parse(body);
                console.log("Hiii...", name);

                let arr = [];
                try {
                    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
                    arr = JSON.parse(d1);
                } catch (err) {
                    arr = []; // Initialize as empty if file doesn't exist
                }

                let status = arr.find(ele => ele.email === email);
                if (status) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ 'msg': 'User is already registered with this email' }));
                }

                arr.push({ name, email, password });
                await fs.writeFile('student.json', JSON.stringify(arr, null, 2));

                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 'msg': 'Registration done successfully' }));
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 'msg': 'Internal Server Error' }));
            }
        });
    } 

    else if (req.url === '/login' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('end', async () => {
            try {
                const { email, password } = JSON.parse(body);
                console.log("Hiii...", email, password);

                let arr = [];
                try {
                    const d1 = await fs.readFile('student.json', { encoding: 'utf-8' });
                    arr = JSON.parse(d1);
                } catch (err) {
                    arr = []; // Initialize as empty if file doesn't exist
                }

                let status = arr.find(ele => ele.email === email && ele.password === password);
                if (status) {
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ 'msg': 'success' }));
                } else {
                    res.writeHead(401, { 'Content-Type': 'application/json' });
                    return res.end(JSON.stringify({ 'msg': 'Invalid user, please login with correct credentials' }));
                }
            } catch (error) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 'msg': 'Internal Server Error' }));
            }
        });
    } 

    else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ 'msg': 'Route Not Found' }));
    }
});

server.listen(PORT, () => {
    console.log("Server is running on::" + PORT);
});

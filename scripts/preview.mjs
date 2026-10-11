import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';

const root = resolve('out');
const port = Number(process.env.PORT ?? 4173);
const contentTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp',
    '.xml': 'application/xml; charset=utf-8',
};

createServer(async (request, response) => {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
        response.writeHead(405, { Allow: 'GET, HEAD' }).end();
        return;
    }

    try {
        const pathname = decodeURIComponent(new URL(request.url ?? '/', 'http://localhost').pathname);
        const requestedPath = resolve(root, `.${pathname}`);
        if (requestedPath !== root && !requestedPath.startsWith(`${root}${sep}`)) {
            response.writeHead(403).end('Forbidden');
            return;
        }

        const requestedStat = await stat(requestedPath);
        const filePath = requestedStat.isDirectory() ? resolve(requestedPath, 'index.html') : requestedPath;
        const body = await readFile(filePath);
        response.writeHead(200, {
            'Cache-Control': 'no-store',
            'Content-Length': body.length,
            'Content-Type': contentTypes[extname(filePath).toLowerCase()] ?? 'application/octet-stream',
            'X-Content-Type-Options': 'nosniff',
        });
        response.end(request.method === 'HEAD' ? undefined : body);
    } catch {
        response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
    }
}).listen(port, '127.0.0.1', () => {
    console.log(`Static export preview: http://localhost:${port}`);
});

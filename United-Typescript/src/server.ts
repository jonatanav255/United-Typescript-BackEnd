const http = require('http')
import { IncomingMessage, ServerResponse } from 'http'

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('ok')
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
    }
  }
)

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

// Listen for Ctrl+C (SIGINT) to stop the server gracefully
process.on('SIGINT', () => {
  server.close(() => {
    console.log('\n-----Server stopped gracefully------')
    process.exit(0) // Exit the process
  })
})

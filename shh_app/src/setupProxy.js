import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app){
  app.use(
      createProxyMiddleware('/api', {
          target: 'http://localhost:8089',
          changeOrigin: true
      })
  )
};
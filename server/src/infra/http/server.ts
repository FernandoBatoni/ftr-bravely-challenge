import { buildServer } from './app';

buildServer()
  .listen({
    port: 4000,
    host: '0.0.0.0',
  })
  .then((_) => {
    console.log('Server is running on port 4000');
  });

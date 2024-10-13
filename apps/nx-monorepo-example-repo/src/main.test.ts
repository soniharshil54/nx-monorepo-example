import request from 'supertest';
import app from './main'; // Importing the Express app

describe('GET /', () => {
  it('should return Hello API message', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello API');
  });
});

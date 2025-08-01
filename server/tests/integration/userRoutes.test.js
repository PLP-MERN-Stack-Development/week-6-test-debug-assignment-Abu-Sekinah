
const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/users', () => {
  it('should return list of users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'Alice' })]));
  });
});

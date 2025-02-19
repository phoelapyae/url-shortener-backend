import request from 'supertest';
import URL from "../src/models/shortener";
import app from "../src/app";

const newUrl = {
    'short_url': '123456',
    'long_url': 'https://www.bbc.com/'
}

beforeEach(async () => {
    await URL.destroy({
        truncate: true
    });

    await URL.create(newUrl);
});

test('should generate a new short url', async() => {
    const response = await request(app)
        .post('/api/shorteners')
        .send({ long_url: newUrl.long_url });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('data');
})

test('should return a list of urls', async() => {
    const response = await request(app)
        .get('/api/shorteners');

    expect(response.status).toBe(200);
})

test('should redirect to long url', async() => {
    const response = await request(app)
        .get(`/api/shorteners/${newUrl.short_url}`);
    
    expect(response.status).toBe(302);
    expect(response.header.location).toBe(newUrl.long_url);
})

// test('should be deleted', async() => {
//     const response = await request(app)
//         .delete(`/api/shorteners/1`)
    
//     expect(response.status).toBe(200);
// })
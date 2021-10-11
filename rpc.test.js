const pactum = require('pactum');

it('should be a teapot', async () => {
  await pactum.spec()
    .get('https://api.staging.sushirelay.com/v1')
    .expectStatus(200);
});

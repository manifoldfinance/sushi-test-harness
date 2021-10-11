const pactum = require('pactum');

it('should respond status', async () => {
  await pactum.spec()
    .get('https://api.staging.sushirelay.com/v1')
    .expectStatus(200);
});

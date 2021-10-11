const { mock } = require('pactum');

mock.addInteraction({
  request: {
    method: 'GET',
    path: '/api/chainid'
  },
  response: {
    status: 200,
    body: [
      {
        chainId: '0x1'
      }
    ]
  }
});

mock.start(3000);
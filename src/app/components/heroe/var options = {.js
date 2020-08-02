const contador = user.get('contador');
const correlativo = user.get('correlativo');

const options = {
    method: 'POST',
    uri: 'https://qas.eegsa.net/api/servicioscomerciales/consultasaldo/',
    body: {
      'token': '422EE3C9-BC38-4F60-BCA9-75F02FF67E29',
      'idInterno': 232442,
      'contador': contador,
      'correlativo': correlativo
	},
    json: true
};

rp(options) 
	.then(infoClient => {
        if (infoClient.saldo.toLowerCase().includes('saldo')) {
            result.text(`Saldo Actual, ${infoClient.saldo}`);
        } else {
            result.text(`Saldo Actual es de Q ${infoClient.saldo}`);
        }
		result.done();
	})	.catch(err => {
		result.text('Problems!: ' + err.message);
		result.done();
	});
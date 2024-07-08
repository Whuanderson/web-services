const soap = require('soap');
const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

soap.createClient(url, function (err, res) {
  // console.log('DESCREVE -->', res.describe().AtendeClienteService.AtendeClientePort)

  res.consultaCEP({ cep: '64048919'}, function (err, res) {
    if(err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
});

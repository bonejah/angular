import { Transacao } from './transacao';

export const transacoes = [
  {
    'MerchantOrderId': '2014111703',
    'Customer': {
      'Name': '[Guest]'
    },
    'Payment': {
      'ServiceTaxAmount': 0,
      'Installments': 1,
      'Interest': 0,
      'Capture': false,
      'Authenticate': false,
      'Recurrent': false,
      'CreditCard': {
        'CardNumber': '455187******0181',
        'Holder': 'Teste Holder',
        'ExpirationDate': '12/2021',
        'SaveCard': false,
        'Brand': 'Visa'
      },
      'Tid': '0407120858677',
      'ProofOfSale': '858677',
      'AuthorizationCode': '408180',
      'SoftDescriptor': '123456789ABCD',
      'Provider': 'Simulado',
      'PaymentId': 'eb616a9f-00bc-437d-bbf8-0f5e8a3e716c',
      'Type': 'CreditCard',
      'Amount': 15700,
      'ReceivedDate': '2017-04-07 12:08:58',
      'Currency': 'BRL',
      'Country': 'BRA',
      'ReturnCode': '4',
      'ReturnMessage': 'Operation Successful',
      'Status': 1,
      'Links': [
        {
          'Method': 'GET',
          'Rel': 'self',
          'Href': 'https://apiquerydev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c'
        },
        {
          'Method': 'PUT',
          'Rel': 'capture',
          'Href': 'https://apidev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c/capture'
        },
        {
          'Method': 'PUT',
          'Rel': 'void',
          'Href': 'https://apidev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c/void'
        }
      ]
    }
  },
  {
    'MerchantOrderId': '2017191212',
    'Customer': {
      'Name': '[Guest]'
    },
    'Payment': {
      'ServiceTaxAmount': 0,
      'Installments': 1,
      'Interest': 0,
      'Capture': false,
      'Authenticate': false,
      'Recurrent': false,
      'CreditCard': {
        'CardNumber': '455187******0181',
        'Holder': 'Teste Holder',
        'ExpirationDate': '12/2021',
        'SaveCard': false,
        'Brand': 'Visa'
      },
      'Tid': '0407120858677',
      'ProofOfSale': '858677',
      'AuthorizationCode': '408180',
      'SoftDescriptor': '123456789ABCD',
      'Provider': 'Simulado',
      'PaymentId': 'eb616a9f-00bc-437d-bbf8-0f5e8a3e716c',
      'Type': 'CreditCard',
      'Amount': 15700,
      'ReceivedDate': '2017-04-07 12:08:58',
      'Currency': 'BRL',
      'Country': 'BRA',
      'ReturnCode': '4',
      'ReturnMessage': 'Operation Successful',
      'Status': 1,
      'Links': [
        {
          'Method': 'GET',
          'Rel': 'self',
          'Href': 'https://apiquerydev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c'
        },
        {
          'Method': 'PUT',
          'Rel': 'capture',
          'Href': 'https://apidev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c/capture'
        },
        {
          'Method': 'PUT',
          'Rel': 'void',
          'Href': 'https://apidev.cieloecommerce.cielo.com.br/1/sales/eb616a9f-00bc-437d-bbf8-0f5e8a3e716c/void'
        }
      ]
    }
  }
];



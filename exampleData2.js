const exampleData2 = 
// {
//   "id":2,
//   "Codigo":51373,
//   "Motorista":"Marcones Perleberg",
//   "Viagens":{
//     "tableId":"Viagens",
//     "rowIds":[4,5]
//   },
//   "Autor":{
//     "CEP":"96070-850",
//     "Cidade":"Pelotas",
//     "Email":"michele.perleberg@bol.com.br",
//     "Empresa":"Transportes Perleberg",
//     "Endereco":"Av. Fernando Osório, 6984",
//     "Estado":"RS",
//     "Phone":"(53) 98414-0297"
//   },
//   "Emissao":"2020-08-24T00:00:00.000Z",
//   "Due":"2020-09-24T00:00:00.000Z",
//   "Nota":"",
//   "References":{
//     "Autor":{
//       "CEP":"96070-850",
//       "Cidade":"Pelotas",
//       "Email":"michele.perleberg@bol.com.br",
//       "Empresa":"Transportes Perleberg",
//       "Endereco":"Av. Fernando Osório, 6984",
//       "Estado":"RS",
//       "Phone":"(53) 98414-0297"
//     },
//     "Codigo":51373,
//     "Due":"2020-09-24T00:00:00.000Z",
//     "Emissao":"2020-08-24T00:00:00.000Z",
//     "Motorista":{
//       "CEP":"96070-850",
//       "Cidade":"Pelotas",
//       "Endereco":"Fernando Osório, 6984",
//       "Estado":"RS",
//       "Motorista":"Marcones Perleberg",
//       "Placa":{
//         "tableId":"Veiculos",
//         "rowId":4
//       },
//       "Status":[
//         "Empregado"
//       ],
//       "TaxaComissao":0.18,
//       "Telefone":null,
//       "id":2
//     },
//     "Nota":"",
//     "Total":null,
//     "Viagens":
//     [
//       {
//         "CodigoRecibo":{
//           "tableId":"Recibos",
//           "rowId":2
//         },
//         "Comissao":null,
//         "Data_Carga":null,
//         "Data_Descarga":null,
//         "Destino":"POA_Dest",
//         "Motorista":"Marcones Perleberg",
//         "Origem":"PEL_OEM",
//         "Toneladas":1,
//         "Placa":"UmaPlaca",
//         "Preco":100,
//         "Produto2":"Clapping!",
//         "TaxaComissao":null,
//         "Valor":100,
//         "id":4
//       },
//       {
//         "CodigoRecibo":{
//           "tableId":"Recibos",
//           "rowId":2
//         },
//         "Comissao":null,
//         "Data_Carga":null,
//         "Data_Descarga":null,
//         "Destino":"RG_Dest",
//         "Motorista":"Marcones Perleberg",
//         "Origem":"PEL_OEM",
//         "Toneladas":3,
//         "Placa":null,
//         "Preco":39,
//         "Produto2":"Bravo",
//         "TaxaComissao":null,
//         "Valor":117,
//         "id":5
//       }
//     ],
//     "id":2
//   },
//   "Total":null
// }
{"id":2,"References":{
  "Autor":{
    "CEP":"96070-850","Cidade":"Pelotas","Email":"michele.perleberg@bol.com.br",
    "Empresa":"Transportes Perleberg","Endereco":"Av. Fernando Osório, 6984","Estado":"RS","Phone":"(53) 98414-0297"
  },
  "Codigo":51373,
  "Comissao":71.1,
  "Descontos":100,
  "Due":"2020-09-24T00:00:00.000Z",
  "Emissao":"2020-08-24T00:00:00.000Z",
  "Financas":[
    {
      "CodigoRecibo":{
        "tableId":"Recibos",
        "rowId":2
      },"Descricao":"Dinheiro","Motorista":"Marcones Perleberg","Valor":200,"id":7},
      {"CodigoRecibo":{"tableId":"Recibos","rowId":2},"Descricao":"Borracheiro","Motorista":"Marcones Perleberg","Valor":-100,"id":8}
    ],
    "Motorista":{"CEP":"96070-850","Cidade":"Pelotas","Endereco":"Fernando Osório, 6984","Estado":"RS","Motorista":"Marcones Perleberg",
      "Placa":{"tableId":"Veiculos","rowId":4},"Status":["Empregado"],"TaxaComissao":0.18,"Telefone":null,"id":2
    },
    "Nota":"a",
    "Subtotal":395,
    "Total":171.1,"Viagens":[
      {"CodigoRecibo":{"tableId":"Recibos","rowId":2},
      "Comissao":36,
      "Data_Carga":"2020-09-20T00:00:00.000Z",
      "Data_Descarga":"2020-09-23T00:00:00.000Z",
      "Destino":"asdf","Motorista":"Marcones Perleberg","Origem":"sdfb","Toneladas":2,"Placa":"JAB-9D07","Preco":100,"Produto":"soja","TaxaComissao":0.18,"Valor":200,"id":4},{"CodigoRecibo":{"tableId":"Recibos","rowId":2},"Comissao":35.1,"Data_Carga":null,"Data_Descarga":null,"Destino":"","Motorista":"Marcones Perleberg","Origem":"","Toneladas":5,"Placa":"JAB-9D07","Preco":39,"Produto":"café","TaxaComissao":0.18,"Valor":195,"id":5}],"id":2},"Subtotal":395
};
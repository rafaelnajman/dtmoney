import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions : [
        {
          id: 1,
          title: 'Freelance',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-12-19 19:30:00'),
        },
        {
          id: 2,
          title: 'Bills',
          type: 'withdraw',
          category: 'House',
          amount: 1532,
          createdAt: new Date('2021-12-10 19:30:00'),
        },
      ],
    })
  },

  routes(){
    this.namespace = 'api';//chamadas a api a partir da requisicao

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    this.post('./transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
      
      
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

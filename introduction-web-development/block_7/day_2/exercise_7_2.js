const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   console.log(`Olá Ana Silveira, entrega para: ${order.name}, ${order.phoneNumber}, ${order.address.street}, ${order.address.number}, ${order.address.apartment}.`);
// }

// customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  let newName = {name: 'Luiz Silva'};
  Object.assign(order, newName);
  let newPaymentTotal = {payment: {total: 50}}
  Object.assign(order, newPaymentTotal);
  let drinks = order.drinks;
  let orderedPizzas = order.order;
  let flavors = `${Object.keys(orderedPizzas.pizza)[0]}, ${Object.keys(orderedPizzas.pizza)[1]} e ${Object.values(orderedPizzas.drinks.coke)[0]}`;
  console.log(`Olá ${order.name}, o total do seu pedido de ${flavors} é R$${order.payment.total},00.`);
}

orderModifier(order);

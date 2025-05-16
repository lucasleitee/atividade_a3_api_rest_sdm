import { v4 as uuidv4 } from 'uuid';
import customers from '../models/Customer.js';

class CustomerRepository {
  findAll() {
    return customers;
  }

  findById(id) {
    return customers.find(customer => customer.id === id);
  }

  create(customerData) {
    const newCustomer = { id: uuidv4(), ...customerData };
    customers.push(newCustomer);
    return newCustomer;
  }

  delete(id) {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      return customers.splice(index, 1)[0];
    }
    return null;
  }
}

export default new CustomerRepository();

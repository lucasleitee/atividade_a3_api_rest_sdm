import customerRepository from '../repositories/CustomerRepository.js';

class CustomerController {
  getAll(req, res) {
    const customers = customerRepository.findAll();
    res.json(customers);
  }

  create(req, res) {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    const newCustomer = customerRepository.create({ name, email });
    res.status(201).json(newCustomer);
  }

  delete(req, res) {
    const { id } = req.params;
    const deletedCustomer = customerRepository.delete(id);

    if (!deletedCustomer) {
      return res.status(404).json({ error: 'Customer not found' });
    }

    res.json({ message: 'Customer deleted', customer: deletedCustomer });
  }
}

export default new CustomerController();

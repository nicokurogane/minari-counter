const CUSTOMER_PATH = '/customers';

export default {
  customers: id => (!id ? CUSTOMER_PATH : `${CUSTOMER_PATH}/${id}`),
};

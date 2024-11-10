const dev = {
  product: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  order: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  import: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  bff: "https://.execute-api.eu-west-1.amazonaws.com/dev",
  cart: "https://.execute-api.eu-west-1.amazonaws.com/dev",
};

const prod = {
  product: "https://4gqsh9pob6.execute-api.us-east-1.amazonaws.com/prod",
  order: "https://4gqsh9pob6.execute-api.us-east-1.amazonaws.com/prod",
  import: "https://gvgpzvmo1j.execute-api.us-east-1.amazonaws.com/prod",
  bff: "https://4gqsh9pob6.execute-api.us-east-1.amazonaws.com/prod",
  cart: "https://670wje56jd.execute-api.us-east-1.amazonaws.com/prod",
}

const API_PATHS = import.meta.env.MODE === 'production' ? prod : dev;

export default API_PATHS;

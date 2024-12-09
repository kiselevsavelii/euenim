// Define a no-op function (perhaps from a utility library)
const noop$2 = () => {};

// Use the no-op function in a configuration
const config = {
  sphere: noop$2,
  // other properties...
};

// Later in the application logic
if (typeof config.sphere === 'function') {
  config.sphere(); // This will do nothing
}

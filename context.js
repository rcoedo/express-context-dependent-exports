const { AsyncLocalStorage } = require("async_hooks");
const { v4: uuid } = require("uuid");

const context = new AsyncLocalStorage();

const middleware = (req, res, next) => {
  context.run(new Map(), () => {
    context.getStore().set("requestId", uuid());
    next();
  });
};

module.exports = {
  get requestId() {
    const store = context.getStore();
    return store ? store.get("requestId") : "no-id";
  },
  middleware,
};

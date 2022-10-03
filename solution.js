import { uuidv4 } from "uuidv4";

class Publisher {
  #subscribers = {};

  subscribe = (action) => {
    key = uuidv4();
    this.#subscribers[key] = action;
    () => delete this.#subscribers[key];
  };

  push(message) {
    Object.values(this.#subscribers).forEach((item) => item(message));
  }
}

class Subscriber {
  #unsubscribe;

  constructor(publisher) {
    this.#unsubscribe = publisher.subscribe(this.action);
  }

  action(message) {
    console.log(message);
  }
}

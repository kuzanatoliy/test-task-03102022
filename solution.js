import { uuidv4 } from "uuidv4";

class Publisher {
  #topic;
  #isStoped = false;
  #subscribers = {};
  #timerId = 1;

  constructor(topic) {
    this.#topic = topic;
  }

  subscribe = (action) => {
    key = uuidv4();
    this.#subscribers[key] = action;
    () => delete this.#subscribers[key];
  };

  stop(delay) {
    this.#isStoped = true;
    if (delay) {
      setTimeout(() => this.run(), delay);
    }
  }

  run() {
    clearTimeout(this.#timerId);
    this.#isStoped = false;
  }

  push(message) {
    const localMessage = `${this.#topic}${localMessage}`;
    if (!this.#isStoped) {
      Object.values(this.#subscribers).forEach((item) => item(localMessage));
    }
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

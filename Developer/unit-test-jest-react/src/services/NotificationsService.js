import { delay } from 'redux-saga';

export default {
  async getNotifications() {
    console.warn("REAL NOTIFICATION SERVICE! CONTACTING APIS!");

    await delay(1000);
    return { count: 42 };
  }
}

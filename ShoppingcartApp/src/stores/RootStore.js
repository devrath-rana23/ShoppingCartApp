import Cartitems from './Cartitems';

class RootStore {
  cartitems: Cartitems;

  constructor() {
    this.cartitems = new Cartitems(this);
  }
}
export default new RootStore();

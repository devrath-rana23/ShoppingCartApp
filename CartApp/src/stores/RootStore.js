import Cartitems from './Cartitems';
import Addresses from './Addresses';

class RootStore {
  cartitems: Cartitems;
  addresses: Addresses;

  constructor() {
    this.cartitems = new Cartitems(this);
    this.addresses = new Addresses(this);
  }
}
export default new RootStore();

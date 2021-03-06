import {makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Cartitems {
  cartItemsDummy = [
    [
      {
        category_id: 1,
        category_name: "Men's Fashion",
        subcategories: [
          {
            subcategory_id: 1,
            subcategory_name: 'Shirts',
          },
          {
            subcategory_id: 2,
            subcategory_name: 'Jeans',
          },
        ],
      },
      {
        category_id: 2,
        category_name: "Women's Fashion",
        subcategories: [
          {
            subcategory_id: 3,
            subcategory_name: 'Tops',
          },
          {
            subcategory_id: 4,
            subcategory_name: 'Bottoms',
          },
        ],
      },
    ],
    [
      {
        id: 2,
        name: "IndoPrimo Men's Regular Fit Casual Shirt",
        price: '499',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url: 'https://m.media-amazon.com/images/I/41O3A6CUd8L.jpg',
        category_id: 1,
        subcategory_id: 1,
        remember_token: null,
        created_at: '2022-02-07T20:16:01.000000Z',
        updated_at: '2022-02-07T20:16:01.000000Z',
      },
      {
        id: 3,
        name: "Diverse Men's Regular Formal Shirt",
        price: '480',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/81qlnA0rJEL._UY445_.jpg',
        category_id: 1,
        subcategory_id: 1,
        remember_token: null,
        created_at: '2022-02-07T20:17:06.000000Z',
        updated_at: '2022-02-07T20:17:06.000000Z',
      },
      {
        id: 4,
        name: "Amazon Brand - Inkast Denim Co. Men's Slim Casual Shirt",
        price: '480',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/81kJzDOwjNL._UY550_.jpg',
        category_id: 1,
        subcategory_id: 1,
        remember_token: null,
        created_at: '2022-02-07T20:18:12.000000Z',
        updated_at: '2022-02-07T20:18:12.000000Z',
      },
      {
        id: 5,
        name: "Ben Martin Men's Relaxed Jeans",
        price: '698',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/616xchp1ECL._UY741_.jpg',
        category_id: 1,
        subcategory_id: 2,
        remember_token: null,
        created_at: '2022-02-07T20:20:03.000000Z',
        updated_at: '2022-02-07T20:20:03.000000Z',
      },
      {
        id: 6,
        name: "Levi's Men's Regular Jeans",
        price: '999',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/81iVZ7r11NL._UX569_.jpg',
        category_id: 1,
        subcategory_id: 2,
        remember_token: null,
        created_at: '2022-02-07T20:20:49.000000Z',
        updated_at: '2022-02-07T20:20:49.000000Z',
      },
      {
        id: 7,
        name: "Urbano Fashion Men's Slim Fit Black Stretch Jeans",
        price: '699',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/611hFiiUv4L._UX679_.jpg',
        category_id: 1,
        subcategory_id: 2,
        remember_token: null,
        created_at: '2022-02-07T20:21:27.000000Z',
        updated_at: '2022-02-07T20:21:27.000000Z',
      },
      {
        id: 9,
        name: "Janasya Women's Mustard Poly Georgette Top",
        price: '499',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/81wv+QSad1S._UY741_.jpg',
        category_id: 2,
        subcategory_id: 3,
        remember_token: null,
        created_at: '2022-02-07T20:24:42.000000Z',
        updated_at: '2022-02-07T20:24:42.000000Z',
      },
      {
        id: 10,
        name: "Lymio Women's Regular Top",
        price: '399',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/714H361NfrL._UY741_.jpg',
        category_id: 2,
        subcategory_id: 3,
        remember_token: null,
        created_at: '2022-02-07T20:26:37.000000Z',
        updated_at: '2022-02-07T20:26:37.000000Z',
      },
      {
        id: 11,
        name: "Uniform Craft Women's Polyester and Cotton Twill Support Staff Uniform, Green and Grey",
        price: '399',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/61jyXYmRhkL._UY741_.jpg',
        category_id: 2,
        subcategory_id: 3,
        remember_token: null,
        created_at: '2022-02-07T20:27:13.000000Z',
        updated_at: '2022-02-07T20:27:13.000000Z',
      },
      {
        id: 12,
        name: "Amazon Brand - Myx Women's Straight Bottom",
        price: '299',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/81DoqxAEKSL._UX569_.jpg',
        category_id: 2,
        subcategory_id: 4,
        remember_token: null,
        created_at: '2022-02-07T20:28:20.000000Z',
        updated_at: '2022-02-07T20:28:20.000000Z',
      },
      {
        id: 13,
        name: "Amazon Brand - Myx Women's Palazzo Bottom",
        price: '599',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/71Y3uXjMGBL._UX569_.jpg',
        category_id: 2,
        subcategory_id: 4,
        remember_token: null,
        created_at: '2022-02-07T20:29:03.000000Z',
        updated_at: '2022-02-07T20:29:03.000000Z',
      },
      {
        id: 14,
        name: "Buy That Trendz Women's Cotton Viscose Lycra Dhoti Patiyala Salwar Harem Bottoms Pants Combo Pack of 2",
        price: '899',
        stock: 50,
        count: 0,
        added: 0,
        is_wishlist: 0,
        image_url:
          'https://m.media-amazon.com/images/I/61x-sq7vJjL._UY741_.jpg',
        category_id: 2,
        subcategory_id: 4,
        remember_token: null,
        created_at: '2022-02-07T20:29:42.000000Z',
        updated_at: '2022-02-07T20:29:42.000000Z',
      },
    ],
  ];

  cartItemsDummyReq = [
    {
      id: 2,
      name: "IndoPrimo Men's Regular Fit Casual Shirt",
      price: '499',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/41O3A6CUd8L.jpg',
      category_id: 1,
      subcategory_id: 1,
      remember_token: null,
      created_at: '2022-02-07T20:16:01.000000Z',
      updated_at: '2022-02-07T20:16:01.000000Z',
    },
    {
      id: 3,
      name: "Diverse Men's Regular Formal Shirt",
      price: '480',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/81qlnA0rJEL._UY445_.jpg',
      category_id: 1,
      subcategory_id: 1,
      remember_token: null,
      created_at: '2022-02-07T20:17:06.000000Z',
      updated_at: '2022-02-07T20:17:06.000000Z',
    },
    {
      id: 4,
      name: "Amazon Brand - Inkast Denim Co. Men's Slim Casual Shirt",
      price: '480',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/81kJzDOwjNL._UY550_.jpg',
      category_id: 1,
      subcategory_id: 1,
      remember_token: null,
      created_at: '2022-02-07T20:18:12.000000Z',
      updated_at: '2022-02-07T20:18:12.000000Z',
    },
    {
      id: 5,
      name: "Ben Martin Men's Relaxed Jeans",
      price: '698',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/616xchp1ECL._UY741_.jpg',
      category_id: 1,
      subcategory_id: 2,
      remember_token: null,
      created_at: '2022-02-07T20:20:03.000000Z',
      updated_at: '2022-02-07T20:20:03.000000Z',
    },
    {
      id: 6,
      name: "Levi's Men's Regular Jeans",
      price: '999',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/81iVZ7r11NL._UX569_.jpg',
      category_id: 1,
      subcategory_id: 2,
      remember_token: null,
      created_at: '2022-02-07T20:20:49.000000Z',
      updated_at: '2022-02-07T20:20:49.000000Z',
    },
    {
      id: 7,
      name: "Urbano Fashion Men's Slim Fit Black Stretch Jeans",
      price: '699',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/611hFiiUv4L._UX679_.jpg',
      category_id: 1,
      subcategory_id: 2,
      remember_token: null,
      created_at: '2022-02-07T20:21:27.000000Z',
      updated_at: '2022-02-07T20:21:27.000000Z',
    },
    {
      id: 9,
      name: "Janasya Women's Mustard Poly Georgette Top",
      price: '499',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/81wv+QSad1S._UY741_.jpg',
      category_id: 2,
      subcategory_id: 3,
      remember_token: null,
      created_at: '2022-02-07T20:24:42.000000Z',
      updated_at: '2022-02-07T20:24:42.000000Z',
    },
    {
      id: 10,
      name: "Lymio Women's Regular Top",
      price: '399',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/714H361NfrL._UY741_.jpg',
      category_id: 2,
      subcategory_id: 3,
      remember_token: null,
      created_at: '2022-02-07T20:26:37.000000Z',
      updated_at: '2022-02-07T20:26:37.000000Z',
    },
    {
      id: 11,
      name: "Uniform Craft Women's Polyester and Cotton Twill Support Staff Uniform, Green and Grey",
      price: '399',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/61jyXYmRhkL._UY741_.jpg',
      category_id: 2,
      subcategory_id: 3,
      remember_token: null,
      created_at: '2022-02-07T20:27:13.000000Z',
      updated_at: '2022-02-07T20:27:13.000000Z',
    },
    {
      id: 12,
      name: "Amazon Brand - Myx Women's Straight Bottom",
      price: '299',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/81DoqxAEKSL._UX569_.jpg',
      category_id: 2,
      subcategory_id: 4,
      remember_token: null,
      created_at: '2022-02-07T20:28:20.000000Z',
      updated_at: '2022-02-07T20:28:20.000000Z',
    },
    {
      id: 13,
      name: "Amazon Brand - Myx Women's Palazzo Bottom",
      price: '599',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/71Y3uXjMGBL._UX569_.jpg',
      category_id: 2,
      subcategory_id: 4,
      remember_token: null,
      created_at: '2022-02-07T20:29:03.000000Z',
      updated_at: '2022-02-07T20:29:03.000000Z',
    },
    {
      id: 14,
      name: "Buy That Trendz Women's Cotton Viscose Lycra Dhoti Patiyala Salwar Harem Bottoms Pants Combo Pack of 2",
      price: '899',
      stock: 50,
      count: 0,
      added: 0,
      is_wishlist: 0,
      image_url: 'https://m.media-amazon.com/images/I/61x-sq7vJjL._UY741_.jpg',
      category_id: 2,
      subcategory_id: 4,
      remember_token: null,
      created_at: '2022-02-07T20:29:42.000000Z',
      updated_at: '2022-02-07T20:29:42.000000Z',
    },
  ];
  cartItems = [];
  listDataSource = [];
  cartCount = 0;
  wishlistCount = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increementCartCount = () => {
    this.cartCount += 1;
  };

  decreementCartCount = (is_cart, count) => {
    is_cart == true ? (this.cartCount -= count) : (this.cartCount -= 1);
  };

  increementWishlistCount = () => {
    this.wishlistCount += 1;
  };

  decreementWishlistCount = () => {
    this.wishlistCount =
      this.wishlistCount > 0 ? --this.wishlistCount : this.wishlistCount;
  };

  getNavOptions = () => {
    try {
      let array = [];
      let newArray = [];
      array = this.cartItemsDummy[0];
      array.forEach(element => {
        newArray.push({
          isExpanded: false,
          category_name: element.category_name,
          subcategory: element.subcategories.map(item => {
            return {
              val: item.subcategory_name,
              cat: element.category_name,
              category_id: element.category_id,
              subcategory_id: item.subcategory_id,
            };
          }),
        });
      });
      this.setListDataSource(newArray);
    } catch (err) {
      console.log(err);
    }
  };

  setListDataSource = array => {
    this.listDataSource = array;
  };

  setItems = data => {
    this.cartItems = data;
  };

  setAsyncItems = () => {
    asyncGetData()
      .then(reqData => this.setReqItems(reqData))
      .catch(e => console.log(e));

    asyncGetWishlistCount()
      .then(reqData => this.setReqWishlistCount(reqData))
      .catch(e => console.log(e));

    asyncGetCartCount()
      .then(reqData => this.setReqCartCount(reqData))
      .catch(e => console.log(e));
  };

  setReqItems = data => {
    data != null ? (this.cartItemsDummy = data) : '';
  };

  setReqWishlistCount = data => {
    data != null ? (this.wishlistCount = data) : '';
  };

  setReqCartCount = data => {
    data != null ? (this.cartCount = data) : '';
  };

  getCategoryCourses = (category, subcategory) => {
    try {
      let array = [];
      let categoryArray = [];
      let subCategoryArray = [];

      array = this.cartItemsDummy[0];
      array.forEach(element => {
        categoryArray.push({
          category_id: element.category_id,
          category_name: element.category_name,
          subcategories: element.subcategories.map(item => {
            subCategoryArray.push({
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            });
            return {
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            };
          }),
        });
      });
      data = this.cartItemsDummy[1].filter(
        courses =>
          courses.category_id == category &&
          courses.subcategory_id == subcategory,
      );
      data = this.dataWithCatAndSubcatName(
        data,
        categoryArray,
        subCategoryArray,
      );
      this.setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  getWishlistItems = async () => {
    try {
      let array = [];
      let categoryArray = [];
      let subCategoryArray = [];

      array = this.cartItemsDummy[0];

      array.forEach(element => {
        categoryArray.push({
          category_id: element.category_id,
          category_name: element.category_name,
          subcategories: element.subcategories.map(item => {
            subCategoryArray.push({
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            });
            return {
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            };
          }),
        });
      });

      data = this.cartItemsDummy[1].filter(
        courses => courses.is_wishlist == '1',
      );
      data = this.dataWithCatAndSubcatName(
        data,
        categoryArray,
        subCategoryArray,
      );
      this.setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  getCartCourses = async () => {
    try {
      let array = [];
      let categoryArray = [];
      let subCategoryArray = [];

      array = this.cartItemsDummy[0];

      array.forEach(element => {
        categoryArray.push({
          category_id: element.category_id,
          category_name: element.category_name,
          subcategories: element.subcategories.map(item => {
            subCategoryArray.push({
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            });
            return {
              subcategory_id: item.subcategory_id,
              subcategory_name: item.subcategory_name,
            };
          }),
        });
      });

      data = this.cartItemsDummy[1].filter(courses => courses.added == '1');
      data = this.dataWithCatAndSubcatName(
        data,
        categoryArray,
        subCategoryArray,
      );
      this.setItems(data);
    } catch (err) {
      console.log(err);
    }
  };

  dataWithCatAndSubcatName = (data, categoryArray, subCategoryArray) => {
    data = data.map(item => {
      category_name = categoryArray.map(cartItem => {
        return cartItem.category_id == item.category_id
          ? cartItem.category_name
          : null;
      });
      category_name = category_name.filter(item => item != null);
      subcategory_name = subCategoryArray.map(cartItem => {
        return cartItem.subcategory_id == item.subcategory_id
          ? cartItem.subcategory_name
          : null;
      });
      subcategory_name = subcategory_name.filter(item => item != null);
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        stock: item.stock,
        count: item.count,
        added: item.added,
        is_wishlist: item.is_wishlist,
        image_url: item.image_url,
        category_id: item.category_id,
        subcategory_id: item.subcategory_id,
        category_name: category_name[0],
        subcategory_name: subcategory_name[0],
      };
    });
    return data;
  };

  editCourse = (
    id,
    name,
    price,
    stock,
    count,
    added,
    is_wishlist,
    image_url,
    category_id,
    subcategory_id,
    category_name,
    subcategory_name,
    is_plus,
    is_cart,
    is_wishlist_added = false,
  ) => {
    if (!is_wishlist_added) {
      if (!is_cart) {
        is_plus == true
          ? this.increementCartCount()
          : count >= 0
          ? this.decreementCartCount(is_cart, count)
          : '';
      } else {
        this.decreementCartCount(is_cart, count);
        count = 0;
      }
    } else {
      is_wishlist == 0
        ? this.increementWishlistCount()
        : this.decreementWishlistCount();
      is_wishlist = is_wishlist == 0 ? 1 : 0;
    }

    setAsyncWishlistCount(this.wishlistCount);
    setAsyncCartCount(this.cartCount);

    this.cartItemsDummy[1] = this.cartItemsDummy[1].map(item => {
      return item.id == id
        ? {
            id,
            name,
            price,
            stock,
            count,
            added,
            is_wishlist,
            image_url,
            category_id,
            subcategory_id,
            category_name,
            subcategory_name,
          }
        : item;
    });

    asyncStoreData(this.cartItemsDummy);

    data = this.cartItems.map(cartItem => {
      return cartItem.id == id
        ? {
            id,
            name,
            price,
            stock,
            count,
            added,
            is_wishlist,
            image_url,
            category_id,
            subcategory_id,
            category_name,
            subcategory_name,
          }
        : cartItem;
    });
    this.setItems(data);
  };
}

const asyncStoreData = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@ItemsReq', jsonValue);
  } catch (e) {}
};

const setAsyncWishlistCount = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@WishlistCount', jsonValue);
  } catch (e) {}
};

const setAsyncCartCount = async data => {
  try {
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem('@CartCount', jsonValue);
  } catch (e) {}
};

const asyncGetData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@ItemsReq');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

const asyncGetCartCount = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@CartCount');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

const asyncGetWishlistCount = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@WishlistCount');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {}
};

export default Cartitems;

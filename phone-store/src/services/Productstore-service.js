export default class ProductstoreService {

  data = [
    {
      id: 1,
      title: 'Samsung Galaxy S10 Plus',
      details: 'Samsung Galaxy S10 Plus',
      price: 800,
      coverImage: 'https://touch.com.ua/upload/iblock/bb9/bb98558e19cf612e4810c9d05c8f893f.jpg'},
    {
      id: 2,
      title: 'Iphone 10 XR ',
      details: 'Iphone 10 XR ',
      price: 1000,
      coverImage: 'https://touch.com.ua/upload/iblock/0cf/0cfd16266c202615ddb7d41005727b7e.jpg'},
		{
			id: 3,
			title: 'Samsung Galaxy Note 9',
			details: 'Samsung Galaxy Note 9',
			price: 45,
			coverImage: 'https://touch.com.ua/upload/iblock/c38/c3848d9ffb7df0c1bb9ca8f849488ddb.jpg'},
		{
			id: 4,
			title: 'Xiaomi Redmi Note 6',
			details: 'Xiaomi Redmi Note 6',
			price: 170,
			coverImage: 'https://touch.com.ua/upload/iblock/137/13730871f1aed45cdc1aa79709c619d1.jpg'},
		{
			id: 5,
			title: 'Huawei Mate 10 Pro ',
			details: 'Huawei Mate 10 Pro ',
			price: 600,
			coverImage: 'https://touch.com.ua/upload/iblock/430/430d40de18c1e6967b68c9b2dee2203f.jpg'},

  ];

  getProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.75) {
          reject(new Error('Something bad happened'));
        } else {
          resolve(this.data);
        }
      }, 700);
    });
  }
}

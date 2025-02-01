import { hashSync } from "bcrypt-ts-edge";

const sampleData = {
  users: [
    {
      name: 'Afagh',
      email: 'afagh@gmail.com',
      password: hashSync('123456'),
      role: 'admin',
    },
    {
      name: 'zahra',
      email: 'user@gmail.com',
      password: hashSync('123456'),
      role: 'user',
    },
  ],
  products: [
      {
        name: 'iPhone 14 Pro Max',
    slug: 'iphone-14-pro-max',
    category: 'Mobile',
    description: 'The iPhone 14 Pro Max is a top-notch mobile with cutting-edge features and sleek design.',
    images: [
        '/images/sample-products/iphone-14-pro-max.jpg',
      '/images/sample-products/iphone-14-pro-max-1.jpg'
    ],
    price: 1085.0,
    brand: 'Apple',
    rating: 4.6,
    numReviews: 295,
    stock: 74,
    isFeatured: true,
    banner: '/images/iphone-14-pro-max-banner.jpg'
      },
    {
      name: 'Samsung Galaxy S23 Ultra',
      slug: 'samsung-galaxy-s23-ultra',
      category: 'Mobile',
      description: 'The Samsung Galaxy S23 Ultra is a top-notch mobile with cutting-edge features and sleek design.',
      images: [
          '/images/sample-products/samsung-galaxy-s23-ultra.jpg',
        '/images/sample-products/samsung-galaxy-s23-ultra-1.jpg',
        '/images/sample-products/samsung-galaxy-s23-ultra-2.jpg'
      ],
      price: 835.47,
      brand: 'Samsung',
      rating: 4.4,
      numReviews: 369,
      stock: 67,
      isFeatured: true,
      banner: '/images/samsung-galaxy-s23-ultra-banner.jpg'
    },
    {
      name: 'MacBook Pro 16-inch',
      slug: 'macbook-pro-16-inch',
      category: 'Laptop',
      description: 'The MacBook Pro 16-inch is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/macbook-pro-16-inch.jpg'],
      price: 2863.84,
      brand: 'Apple',
      rating: 4.2,
      numReviews: 949,
      stock: 94,
      isFeatured: true,
      banner: null
    },
    {
      name: 'Dell XPS 15',
      slug: 'dell-xps-15',
      category: 'Laptop',
      description: 'The Dell XPS 15 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/dell-xps-15.jpg'],
      price: 2764.22,
      brand: 'Dell',
      rating: 4.9,
      numReviews: 192,
      stock: 11,
      isFeatured: true,
      banner: null
    },
    {name: 'Lenovo ThinkPad X1 Carbon',
      slug: 'lenovo-thinkpad-x1-carbon',
      category: 'Laptop',
      description: 'The Lenovo ThinkPad X1 Carbon is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/lenovo-thinkpad-x1-carbon.jpg'],
      price: 1864.98,
      brand: 'Lenovo',
      rating: 4.3,
      numReviews: 535,
      stock: 26,
      isFeatured: true,
      banner: null},
    {name: 'Microsoft Surface Pro 9',
      slug: 'microsoft-surface-pro-9',
      category: 'Tablet',
      description: 'The Microsoft Surface Pro 9 is a top-notch tablet with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 780.78,
      brand: 'Microsoft',
      rating: 4.4,
      numReviews: 933,
      stock: 65,
      isFeatured: false,
      banner: null},
    {name: 'iPad Pro 12.9-inch',
      slug: 'ipad-pro-12.9-inch',
      category: 'Tablet',
      description: 'The iPad Pro 12.9-inch is a top-notch tablet with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 642.92,
      brand: 'Apple',
      rating: 4.9,
      numReviews: 938,
      stock: 10,
      isFeatured: false,
      banner: null},
    {name: 'HP Spectre x360',
      slug: 'hp-spectre-x360',
      category: 'Laptop',
      description: 'The HP Spectre x360 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2868.83,
      brand: 'HP',
      rating: 4.4,
      numReviews: 454,
      stock: 86,
      isFeatured: false,
      banner: null},
    {name: 'Asus ROG Zephyrus G14',
      slug: 'asus-rog-zephyrus-g14',
      category: 'Laptop',
      description: 'The Asus ROG Zephyrus G14 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 1548.83,
      brand: 'Asus',
      rating: 4.8,
      numReviews: 49,
      stock: 15,
      isFeatured: false,
      banner: null},
    {name: 'Google Pixel 7 Pro',
      slug: 'google-pixel-7-pro',
      category: 'Mobile',
      description: 'The Google Pixel 7 Pro is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 1138.0,
      brand: 'Google',
      rating: 4.9,
      numReviews: 773,
      stock: 43,
      isFeatured: true,
      banner: null},
    {name: 'Xiaomi 13 Pro',
      slug: 'xiaomi-13-pro',
      category: 'Mobile',
      description: 'The Xiaomi 13 Pro is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 721.19,
      brand: 'Xiaomi',
      rating: 4.7,
      numReviews: 490,
      stock: 95,
      isFeatured: true,
      banner: null},
    {name: 'OnePlus 11',
      slug: 'oneplus-11',
      category: 'Mobile',
      description: 'The OnePlus 11 is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 377.09,
      brand: 'OnePlus',
      rating: 4.1,
      numReviews: 594,
      stock: 61,
      isFeatured: true,
      banner: null},
    {name: 'Sony Xperia 1 V',
      slug: 'sony-xperia-1-v',
      category: 'Mobile',
      description: 'The Sony Xperia 1 V is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 403.77,
      brand: 'Sony',
      rating: 4.7,
      numReviews: 844,
      stock: 63,
      isFeatured: true,
      banner: null},
    {name: 'Huawei MatePad Pro',
      slug: 'huawei-matepad-pro',
      category: 'Tablet',
      description: 'The Huawei MatePad Pro is a top-notch tablet with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 916.33,
      brand: 'Huawei',
      rating: 4.8,
      numReviews: 111,
      stock: 56,
      isFeatured: false,
      banner: null},
    {name: 'Acer Swift 5',
      slug: 'acer-swift-5',
      category: 'Laptop',
      description: 'The Acer Swift 5 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 802.44,
      brand: 'Acer',
      rating: 4.9,
      numReviews: 707,
      stock: 91,
      isFeatured: true,
      banner: null},
    {name: 'Razer Blade 15',
      slug: 'razer-blade-15',
      category: 'Laptop',
      description: 'The Razer Blade 15 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2448.52,
      brand: 'Razer',
      rating: 4.1,
      numReviews: 809,
      stock: 47,
      isFeatured: false,
      banner: 'https://via.placeholder.com/300x150?text=Razer+Blade+15'},
    {name: 'Samsung Galaxy Tab S8 Ultra',
      slug: 'samsung-galaxy-tab-s8-ultra',
      category: 'Tablet',
      description: 'The Samsung Galaxy Tab S8 Ultra is a top-notch tablet with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 251.54,
      brand: 'Samsung',
      rating: 4.8,
      numReviews: 122,
      stock: 51,
      isFeatured: false,
      banner: null},
    {name: 'Apple Mac Mini M2',
      slug: 'apple-mac-mini-m2',
      category: 'PC',
      description: 'The Apple Mac Mini M2 is a top-notch pc with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 1651.84,
      brand: 'Apple',
      rating: 4.0,
      numReviews: 232,
      stock: 79,
      isFeatured: true,
      banner: null},
    {name: 'Alienware Aurora R15',
      slug: 'alienware-aurora-r15',
      category: 'PC',
      description: 'The Alienware Aurora R15 is a top-notch pc with cutting-edge features and sleek design.',
      images: ['https://via.placeholder.com/150?text=Alienware+Aurora+R15'],
      price: 2221.9,
      brand: 'Alienware',
      rating: 4.7,
      numReviews: 242,
      stock: 69,
      isFeatured: true,
      banner: null},
    {name: 'Corsair One i300',
      slug: 'corsair-one-i300',
      category: 'PC',
      description: 'The Corsair One i300 is a top-notch pc with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2072.08,
      brand: 'Corsair',
      rating: 4.3,
      numReviews: 681,
      stock: 61,
      isFeatured: false,
      banner: null},
    {name: 'MSI Creator Z16',
      slug: 'msi-creator-z16',
      category: 'Laptop',
      description: 'The MSI Creator Z16 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2405.5,
      brand: 'MSI',
      rating: 4.7,
      numReviews: 397,
      stock: 60,
      isFeatured: true,
      banner: null},
    {name: 'Realme GT 3',
      slug: 'realme-gt-3',
      category: 'Mobile',
      description: 'The Realme GT 3 is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 523.84,
      brand: 'Realme',
      rating: 4.2,
      numReviews: 893,
      stock: 34,
      isFeatured: true,
      banner: null},
    {name: 'Asus Vivobook S15',
      slug: 'asus-vivobook-s15',
      category: 'Laptop',
      description: 'The Asus Vivobook S15 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2021.87,
      brand: 'Asus',
      rating: 4.5,
      numReviews: 222,
      stock: 86,
      isFeatured: false,
      banner: null},
    {name: 'Oppo Find X5 Pro',
      slug: 'oppo-find-x5-pro',
      category: 'Mobile',
      description: 'The Oppo Find X5 Pro is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 718.28,
      brand: 'Oppo',
      rating: 4.4,
      numReviews: 618,
      stock: 14,
      isFeatured: false,
      banner: null},
    {name: 'Honor MagicBook 14',
      slug: 'honor-magicbook-14',
      category: 'Laptop',
      description: 'The Honor MagicBook 14 is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 928.37,
      brand: 'Honor',
      rating: 4.7,
      numReviews: 686,
      stock: 16,
      isFeatured: false,
      banner: null},
    {name: 'iMac 24-inch',
      slug: 'imac-24-inch',
      category: 'PC',
      description: 'The iMac 24-inch is a top-notch pc with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 1519.28,
      brand: 'Apple',
      rating: 4.6,
      numReviews: 981,
      stock: 41,
      isFeatured: true,
      banner: null},
    {name: 'Lenovo Yoga 9i',
      slug: 'lenovo-yoga-9i',
      category: 'Laptop',
      description: 'The Lenovo Yoga 9i is a top-notch laptop with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 2014.48,
      brand: 'Lenovo',
      rating: 4.6,
      numReviews: 812,
      stock: 16,
      isFeatured: true,
      banner: null},
    {name: 'Google Pixel Tablet',
      slug: 'google-pixel-tablet',
      category: 'Tablet',
      description: 'The Google Pixel Tablet is a top-notch tablet with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 1013.52,
      brand: 'Google',
      rating: 4.0,
      numReviews: 290,
      stock: 37,
      isFeatured: true,
      banner: null},
    {name: 'Nokia XR21',
      slug: 'nokia-xr21',
      category: 'Mobile',
      description: 'The Nokia XR21 is a top-notch mobile with cutting-edge features and sleek design.',
      images: ['/images/sample-products/sample-product.jpg'],
      price: 360.23,
      brand: 'Nokia',
      rating: 4.6,
      numReviews: 604,
      stock: 52,
      isFeatured: false,
      banner: null}]
};

export default sampleData;

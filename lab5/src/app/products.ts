export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    rating : number;
    category : string;
    like : number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Logitech G102',
      price: 8798 ,
      description: 'Мышь Logitech G102 Lightsync черный',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
      rating: 5,
      category : "Mouse",
      like : 0
    },
    {
      id: 2,
      name: 'MCHOSE AX5 Pro Max',
      price: 81000,
      description: 'Мышь MCHOSE AX5 Pro Max черный',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h5e/hf4/85446585253918.png?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/mchose-ax5-pro-max-chernyi-117476008/?c=750000000",
      rating: 5,
      category : "Mouse",
      like : 0
    },
    {
      id: 3,
      name: 'Logitech G Pro X Superlight 2',
      price: 92529,
      description: 'Мышь Logitech G Pro X Superlight 2 DEX White 910-007365 белый',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hd5/hf0/87314627756062.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/logitech-g-pro-x-superlight-2-dex-white-910-007365-belyi-124352976/?c=750000000",
      rating: 5,
      category : "Mouse",
      like : 0
    },
    {
      id: 4,
      name: 'WLmouse Beast x Max',
      price: 90000 ,
      description: `Мышь WLmouse Beast x Max черный`,
      image: "https://resources.cdn-kaspi.kz/img/m/p/hf6/ha9/86622345625630.png?format=gallery-medium",
      link : "https://kaspi.kz/shop/p/wlmouse-beast-x-max-chernyi-121809942/?c=750000000",
      rating: 5,
      category : "Mouse",
      like : 0
    },
    {
      id: 5,
      name: 'LAMZU MAYA X',
      price: 79990,
      description: `Мышь LAMZU MAYA X белый`,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p16/p62/6761951.png?format=gallery-medium",
      link : "https://kaspi.kz/shop/p/lamzu-maya-x-belyi-129555886/?c=750000000",
      rating: 5,
      category : "Mouse",
      like : 0
    },
    {
      id: 6,
      name: 'PANDORA bracelet',
      price: 52900,
      description: `Браслет PANDORA Браслет I-D 599493C00-3 18 см 11.65 г серебро, без вставок`,
      image: "https://pandora.kz/upload/iblock/774/77496717b8743e0bbd5100c1509e2eaf.png",
      link: 'https://kaspi.kz/shop/p/pandora-braslet-i-d-599493c00-3-18-sm-11-65-g-serebro-bez-vstavok-108093721/?c=750000000#!/item',
      rating: 5,
      category : "Pandora",
      like : 0
    },
    {
      id: 7,
      name: 'PANDORA bracelet',
      price: 53900,
      description: `Браслет PANDORA Moments 591469C01-16 14 см 3.49 г серебро, цирконий`,
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7d/h05/64918315434014.jpg?format=gallery-medium",
      link : "https://kaspi.kz/shop/p/pandora-moments-591469c01-16-14-sm-3-49-g-serebro-tsirkonii-104671913/?c=750000000#!/item",
      rating: 5,
      category : "Pandora",
      like : 0
    },
    {
      id: 8,
      name: 'PANDORA Necklace',
      price: 69900,
      description: `Колье PANDORA Семейное древо 390384CZ-80 Pandora Moments 80 см 7.1 г серебро, цирконий`,
      image: "https://resources.cdn-kaspi.kz/img/m/p/p4d/pcc/1396637.jpg?format=gallery-medium",
      link : "https://kaspi.kz/shop/p/pandora-semeinoe-drevo-390384cz-80-pandora-moments-80-sm-7-1-g-serebro-tsirkonii-101663841/?c=750000000#!/item",
      rating: 5,
      category : "Pandora",
      like : 0
    },
    {
      id: 9,
      name: 'PANDORA ring',
      price: 57900,
      description: `Кольцо PANDORA Тройное кольцо с паве 199057C01-50 16 5.37 г серебро, цирконий`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h78/h10/67203469082654/kol-tsa-s-kamnyami-108180591-1.jpg",
      link : "https://kaspi.kz/shop/p/pandora-troinoe-kol-tso-s-pave-199057c01-50-16-5-37-g-serebro-tsirkonii-108180591/?c=750000000#!/item",
      rating: 5,
      category : "Pandora",
      like : 0
    },
    {
      id: 10,
      name: 'PANDORA bracelet',
      price: 89900,
      description: `Браслет Pandora 599694C01-3 16 см 11.13 г серебро, жемчуг`,
      image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb3/hf9/48804328472606/pandora-me-599694c01-3-serebro-kultivirovannyj-zemcug-103728157-1.jpg",
      link : "https://kaspi.kz/shop/p/pandora-599694c01-3-16-sm-11-13-g-serebro-zhemchug-103728157/?c=750000000#!/item",
      rating: 5,
      category : "Pandora",
      like : 0
    },
    {
      id: 11,
      name: 'By Kilian Straight To Heaven White Cristal',
      price: 345000 ,
      description: 'By Kilian Straight To Heaven White Cristal парфюмерный набор 57.5 мл, для мужчин',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h08/h8f/83752260272158.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/by-kilian-straight-to-heaven-white-cristal-parfjumernyi-nabor-57-5-ml-dlja-muzhchin-113295952/?c=750000000",
      rating: 5,
      category : "Perfume",
      like : 0
    },
    {
      id: 12,
      name: 'Dior Eau Sauvage',
      price: 159999,
      description: 'Dior Eau Sauvage духи PARFUM 200 мл, для мужчин',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h7c/h3e/84960433307678.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/dior-eau-sauvage-duhi-parfum-200-ml-dlja-muzhchin-116035079/?c=750000000",
      rating: 5,
      category : "Perfume",
      like : 0
    },
    {
      id: 13,
      name: "CHANEL Bleu De Chanel",
      price: 114302,
      description: 'CHANEL Bleu De Chanel духи PARFUM 150 мл, для мужчин',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h5f/hb6/65458998116382.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/chanel-bleu-de-chanel-duhi-parfum-150-ml-dlja-muzhchin-107017234/?c=750000000",
      rating: 5,
      category : "Perfume",
      like : 0
    },
    {
      id: 14,
      name: 'Giorgio Armani Noir Kogane',
      price: 137997,
      description: 'Giorgio Armani Noir Kogane парфюмерная вода EDP 100 мл, для мужчин',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hff/h33/86615152590878.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/giorgio-armani-noir-kogane-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-121775900/?c=750000000",
      rating: 5,
      category : "Perfume",
      like : 0
    },
    {
      id: 15,
      name: 'Creed Himalaya',
      price: 84845,
      description: 'Creed Himalaya парфюмерная вода EDP 100 мл, для мужчин',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hc2/h41/81291404574750.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/creed-himalaya-parfjumernaja-voda-edp-100-ml-dlja-muzhchin-17300366/?c=750000000",
      rating: 5,
      category : "Perfume",
      like : 0
    },
    {
      id: 16,
      name: 'Пылесос Deerma DX700',
      price: 15892,
      description: 'Пылесос Deerma DX700 белый',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000",
      rating: 5,
      category : "Vacuum cleaner",
      like : 0
    },
    {
      id: 17,
      name: 'DREAME H13 Pro Plus Mix',
      price: 189999,
      description: 'Пылесос DREAME H13 Pro Plus Mix черный',
      image: "https://resources.cdn-kaspi.kz/img/m/p/pc0/pa5/8599373.jpeg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/dreame-h13-pro-plus-mix-chernyi-121763188/?c=750000000",
      rating: 5,
      category : "Vacuum cleaner",
      like : 0
    },
    {
      id: 18,
      name: 'Rainbow SRX Basic',
      price: 1800000,
      description: 'Пылесос Rainbow SRX Basic черный, синий',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h0f/h07/85193932537886.png?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/rainbow-srx-basic-chernyi-sinii-116696301/?c=750000000",
      rating: 5,
      category : "Vacuum cleaner",
      like : 0
    },
    {
      id: 19,
      name: 'Tefal TY-9571WO',
      price: 500000,
      description: 'Пылесос Tefal TY-9571WO голубой',
      image: "https://resources.cdn-kaspi.kz/img/m/p/h57/h76/63990426370078.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/tefal-ty-9571wo-goluboi-100358572/?c=750000000",
      rating: 5,
      category : "Vacuum cleaner",
      like : 0
    },
    {
      id: 20,
      name: 'DREAME H13',
      price: 450000,
      description: 'Пылесос DREAME H13 серый',
      image: "https://resources.cdn-kaspi.kz/img/m/p/hfa/h7e/82296315478046.jpg?format=gallery-medium",
      link: "https://kaspi.kz/shop/p/dreame-h13-seryi-112145038/?c=750000000",
      rating: 5,
      category : "Vacuum cleaner",
      like : 0
    }
  
  ];
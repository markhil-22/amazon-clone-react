import React from 'react';
import './Home.css';
import Product from './Product';
import eCommerce from './assets/e-commerce.jpg';

function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <img src={eCommerce} alt='eCommerce' className='home__image' />

        <div className='home__row'>
          <Product
            id='12321341'
            title='Tzowla Travel Laptop Backpack Water Resistant Anti-Theft Bag with USB Charging Port and Lock 17.3 Inch Computer Business Backpacks for Women Men'
            price={62.98}
            rating={5}
            image='https://m.media-amazon.com/images/I/71OcLBjwLAL._AC_SX569_.jpg'
          />

          <Product
            id='49538094'
            title='TOSHIBA ML- EM25P(SS) Compact Microwave with Sound on/Off Option, 0.9 Cu.ft, Stainless Steel'
            price={119.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/61r+y7ENK+L._AC_SX679_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='4903850'
            title='Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming'
            price={53.95}
            rating={3}
            image='https://m.media-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg'
          />
          <Product
            id='23445930'
            title='Echo Dot (4th Gen, 2020 release) | Smart speaker with clock and Alexa | Glacier White'
            price={79.99}
            rating={5}
            image='https://m.media-amazon.com/images/I/61nNGJH14kL._AC_SX522_.jpg'
          />
          <Product
            id='3254354345'
            title='2022 Apple 11-inch iPad Pro (Wi-Fi, 128GB) - Space Grey (4th Generation)'
            price={1099.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/81gC7frRJyL._AC_SX679_.jpg'
          />
        </div>

        <div className='home__row'>
          <Product
            id='90829332'
            title='SAMSUNG 49-inch Odyssey G9 Gaming Monitor | QHD, 240hz, 1000R Curved, QLED, NVIDIA G-SYNC & FreeSync | LC49G95TSSNXZA Model
'
            price={1998.99}
            rating={4}
            image='https://m.media-amazon.com/images/I/61SQz8S+fEL._AC_SX522_.jpg'
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

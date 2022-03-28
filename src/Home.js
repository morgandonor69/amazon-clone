import React from 'react'
import './Home.css';
import Product from './Product';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className="home__image"
                src = "https://m.media-amazon.com/images/I/6187jW99q8L._SX3000_.jpg" 
                alt=""//MIGHT NEED TO GO BACK AND CHECK FOR NEW IMAGE
                />

                <div className="home__row">
                    {/*Products*/}
                    {/*Products*/}
                    <Product title='The Lean Startup'
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/91cwOSS4sDL.jpg"
                    rating={2}/>
                    <Product title='Apple Watch SE (GPS, 40mm) - Silver Aluminum Case with Abyss Blue Sport Band'
                    price={249.99}
                    image="https://m.media-amazon.com/images/I/71yofUBMxSL._AC_SX679_.jpg"
                    rating={5}/>
                    
                </div>
                <div className="home__row">
                    {/*Products*/}
                    {/*Products*/}
                    {/*Products*/}
                    <Product title="Yankee Candle Large 2-Wick Tumbler Candle, MidSummer's Night"
                    price={24.95}
                    image="https://m.media-amazon.com/images/I/81SW0hOfsNL._AC_SX679_.jpg"
                    rating={4}/>
                    <Product title="Leeds United FC Men's Home Football Shirt Soccer Jersey 2021-2022"
                    price={81.99}
                    image="https://m.media-amazon.com/images/I/41z-J6zeVtL._AC_UX679_.jpg"
                    rating={4}/>

                    <Product title="Wii Mario Kart - World Edition (by Nintendo)"
                    price={93.41}
                    image="https://m.media-amazon.com/images/I/61ProBdmT0L._SY679_.jpg"
                    rating={4}/>   
                    
                </div>
                <div className="home__row">
                    {/*Products*/}
                    <Product title="SAMSUNG CJ890 Series 49-Inch Ultrawide QHD (3840x1080) Computer Monitor, 144Hz, Curved, HDMI, USB-C, Height Adjustable Stand, 3 Yr WRNTY (LC49J890DKNXZA)"
                    price={969.99}
                    image="https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_SX679_.jpg"
                    rating={5}/>
                    
                </div>
            </div>
        </div>
    )
}


export default Home

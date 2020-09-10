import React from 'react';
import '../CSS/Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home_image" />
                <div className="home__products">
                    <div className="home__productRow">
                        <Product
                            id={0}
                            title="The Road to React: Your journey to master plain yet pragmatic React.js"
                            price={39.99}
                            image="https://m.media-amazon.com/images/I/31apmbgpwkL.jpg"
                            rating={5}
                        />
                        <Product
                            id={1}
                            title="Beexcellent GM-1 - Auriculares Gaming para PS4, PC, Xbox one, PlayStation - Psone"
                            price={18.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/71kujTFCPCL._AC_SL1200_.jpg"
                            rating={4}
                        />
                    </div>
                    <div className="home__productRow">
                        <Product
                            id={2}
                            title="Behringer UM2 U-Phoria - Interfaz de Audio USB "
                            price={29.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/61twhHOrXhL._AC_SL1000_.jpg"
                            rating={5}
                        />
                        <Product
                            id={3}
                            title="Rayzm Afinador para Guitarra/Bajo/Ukelele/Violin/Cromático "
                            price={9.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/51AfUdKREaL._AC_SL1000_.jpg"
                            rating={4}
                        />
                        <Product
                            id={4}
                            title="Martin Smith Ukelele Soprano con Bolsa de Ukelele Madera Natural "
                            price={23.33}
                            image="https://images-na.ssl-images-amazon.com/images/I/81NQUCn9M3L._AC_SL1500_.jpg"
                            rating={3}
                        />
                    </div>
                    <div className="home__productRow">
                        <Product
                            id={5}
                            title="Alesis Recital - Teclado de Piano Digital con 88 Teclas Semi-contrapesadas de Tamaño Completo, Fuente de Alimentación, Altavoces Incorporados y 5 voces de Primera Calidad "
                            price={269.99}
                            image="https://images-na.ssl-images-amazon.com/images/I/515pKdPgB%2BL._AC_SL1000_.jpg"
                            rating={5}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home

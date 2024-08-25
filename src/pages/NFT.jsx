import React, { useEffect } from 'react';
import '../NFT.css';

import Img1 from "../images/bush1.png";
import Mount1 from "../images/mount1.png";
import Mount2 from "../images/mount2.png";
import Bush2 from "../images/bush2.png";
import Leaf1 from "../images/leaf1.png";
import Leaf2 from "../images/leaf2.png";
import pic1 from "../images/1.png";
import pic2 from "../images/2.png";
import pic3 from "../images/3.png";



function NFT() {
  useEffect(() => {
    const title = document.querySelector('.title');
    const leaf1 = document.querySelector('.leaf1');
    const leaf2 = document.querySelector('.leaf2');
    const bush2 = document.querySelector('.bush2');
    const mount1 = document.querySelector('.mount1');
    const mount2 = document.querySelector('.mount2');

    const handleScroll = () => {
      let value = window.scrollY;

      title.style.marginTop = value * 1.1 + 'px';
      leaf1.style.marginLeft = -value + 'px';
      leaf2.style.marginLeft = value + 'px';
      bush2.style.marginBottom = -value + 'px';
      mount1.style.marginBottom = -value * 1.1 + 'px';
      mount2.style.marginBottom = -value * 1.2 + 'px';
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='w-screen overflow-x-hidden '>
      <section className="home">
        <img src={Mount2} className="mount2" alt="Mountain 2" />
        <img src={Mount1} className="mount1" alt="Mountain 1" />
        <img src={Bush2} className="bush2" alt="Bush 2" />

        <h2 className="title">WildLife Tokens</h2>

        <img src={Img1} className="bush1" alt="Bush 1" />
        <img src={Leaf2} className="leaf2" alt="Leaf 2" />
        <img src={Leaf1} className="leaf1" alt="Leaf 1" />
      </section>

      <section className="about">
        <h2>Tokens</h2>
        <div className='nfts'>
          <div className='nfts-img'>
            <img src={pic1} alt="" />
            
            <button className='button-1'>Support Now</button>
          </div>
          <div className='nfts-img'>
            <img src={pic2} alt="" />
            <button className='button-1'>Support Now</button>
          </div>
          <div className='nfts-img'>
            <img src={pic3} alt="" />
            <button className='button-1'>Support Now</button>
            </div>
          </div>
      </section>
    </div>
  );
}

export default NFT;

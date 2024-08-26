import React from 'react'
import './card.css'

function changeImage(){
  var img = document.getElementsByClassName('mainlogo');
  img.src = '/public/WhatsApp Image 2024-08-26 at 17.58.12.jpeg';
}
const Card = () => {
  return (
    
    <>
      
    <main>
    <div className='card-container'>
      
      <div className='card'>
        <div className='card-header'>
          <img src='https://ichef.bbci.co.uk/news/1536/cpsprodpb/568c/live/ad80a940-62f3-11ef-b970-9f202720b57a.jpg.webp' alt='image1' className='pic1'></img>
        </div>
        <div className='card-content'>
          <h3 className='news-title'>Israel and Hezbollah say they don't want war - but they are both ready for it</h3>
          
          <p className='news-desc'>This appears to be Hezbollah’s first significant retaliation for the assassination of a senior commander, Jon Donnison writes.</p>
          <h6>7 hours ago <span></span>Asia</h6>
        </div>
      </div>
      <div className='card card2'>
      <div className='card-content'>
          <h3 className='news-title'>The Indian archer without arms shooting for a gold</h3>
          
          <p className='news-desc'>Sheetal Devi, 17, is the world's only active female archer who competes without arms.</p>
          <h6>7 hours ago <span></span>Asia</h6>
          </div>
        <div className='card2-header'>
          <img src='https://ichef.bbci.co.uk/news/1536/cpsprodpb/bbfc/live/271b3980-62ab-11ef-8c32-f3c2bc7494c6.jpg.webp' alt='image1' className='pic1'></img>
        </div>
        
       
      </div>
      <div className='card box-contain'>
        <div className='box'>
         <h3 className='title'>Upcoming MUNSOC events</h3>
         <ul>
          <li><i class="fi fi-rr-marker"></i>MEC Thrikkakara</li>
          <li><i class="fi fi-rr-marker"></i>CET Thiruvananthapuram</li>
          <li><i class="fi fi-rr-marker"></i>GEC Thrissur</li>
          <li><i class="fi fi-rr-marker"></i>GEC Idukki</li>
          <li><i class="fi fi-rr-marker"></i>MAS Kothamangalam</li>
         </ul>
         <button class='btn' onClick={changeImage()}>Check Out</button>
        </div>
      
      </div>
      <div className='container2'>
      <div className='card'>
        <div className='card-header'>
          <img src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/1c21/live/b70b3d50-6180-11ef-8c59-8955ba72b898.jpg.webp' alt='image1' className='pic1'></img>
        </div>
        <div className='card-content'>
          <h3 className='news-title'>India ready to help find peace, Modi tells Ukraine</h3>
          
          <p className='news-desc'>PM Narendra Modi pays a historic visit to Kyiv and says he is prepared to play a role to bring peace.</p>
          <h6>7 hours ago <span></span>Asia</h6>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <img src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/1cb1/live/21f62a40-6130-11ef-bde7-4fd43dc8559b.jpg.webp' alt='image1' className='pic1'></img>
        </div>
        <div className='card-content'>
          <h3 className='news-title'>Fourteen dead after Indian bus falls into river in Nepal</h3>
          
          <p className='news-desc'>The bus, registered in India, was carrying around 40 passengers when it veered off a highway.</p>
          <h6>7 hours ago <span></span>Asia</h6>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <img src='https://ichef.bbci.co.uk/news/1024/cpsprodpb/56ad/live/12070bb0-5dff-11ef-aa88-e1e8b52e1b59.jpg.webp' alt='image1' className='pic1'></img>
        </div>
        <div className='card-content'>
          <h3 className='news-title'>LGBT Indians demand end to 'discriminatory' ban on blood donation</h3>
          
          <p className='news-desc'>Many countries have lifted bans on blood donations by LGBT people, but India hasn't yet.</p>
          <h6>7 hours ago <span></span>Asia</h6>
        </div>
      </div>
     
      </div>
      
    </div>
    
    
    </main>
    
    </>
  )
}

export default Card
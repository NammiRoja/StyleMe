import React from 'react';
function Footwear(){
    return(
        <div>
            <h1 style={{fontFamily:'Great vibes'}}>Footwear Styles</h1>
            <div className='grid-container'>
                <div className='card'>
                    <img src="https://i.pinimg.com/originals/1f/ef/d4/1fefd457faedd80e1c1323822a54b44b.jpg" alt="Ballet Flats"/>
                    <h3>Ballet flats</h3>
                    <p> Effortless</p>
                </div>
                <div className='card'>
                    <img src='https://acssn.com/cdn/shop/products/So-Poised-Lace-Up-Block-Heels-158.jpg?v=1681642533' alt='Heels'/>
                    <h3> Heels</h3>
                    <p>Elevated</p>
                </div>
            <div className='card'>
                <img src='https://i5.walmartimages.com/seo/Wowcloth-Women-s-Fashion-Casual-Loafers-Bow-Detail-Slip-On-with-Chunky-Low-Heel-for-Spring-Autumn-Leisure-Footwear-Plus-Size_63b8040e-e3f6-45ff-aec3-45ece77aad4b.beebb4b133ae4995da38ff295c4b7037.jpeg' alt='Loafers'/>
                <h3>Loafers</h3>
                <p> Claasic</p>
            </div>
            <div className='card'>
                <img src='https://tse4.mm.bing.net/th/id/OIP.K0ARzG7kvrWLcEa_V20aWwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3' alt='Boots'/>
                <h3>Boots</h3>
                <p>Bold</p>
            </div>
            <div className='card'>
                <img src='https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2024/OCTOBER/9/SR9WG3wX_91c8e9972490487cb47f97cc8e4b91d1.jpg' alt='Sneakers'/>
                <h3>Sneakers</h3>
                <p>Active</p>
            </div>
            <div className='card'>
                <img src='https://5.imimg.com/data5/SELLER/Default/2022/5/PN/BM/WQ/3871253/dabka-moti-punjabi-jutti-for-women-1000x1000.jpg' alt='Juttis'/>
                <h3>Juttis</h3>
                <p>Artisanal</p>
            </div>
            </div>
        </div>
    )
}
export default Footwear;
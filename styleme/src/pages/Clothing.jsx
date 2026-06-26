import React from 'react';
function Clothing(){
    return(
        <div>
            <h1 style={{fontFamily:'Great vibes'}}>Clothing Styles</h1>
            <div className='grid-container'>
                <div className='card'>
                    <img src="https://tse4.mm.bing.net/th/id/OIP.y-yN8jcEzS5Vnbc7B4bNFAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Saree"/>
                    <h3>Organza Saree</h3>
                    <p> Perfect for weddings</p>
                </div>
                <div className='card'>
                    <img src='https://tse3.mm.bing.net/th/id/OIP.lwwTt3yIWmYPURQsRKVkIQHaLH?rs=1&pid=ImgDetMain&o=7&rm=3' alt='Lehenga'/>
                    <h3> Lehenga</h3>
                    <p>Perfect for traditional functions</p>
                </div>
            <div className='card'>
                <img src='https://th.bing.com/th/id/R.27609253ba4f466b3bdfd6ed76c447e6?rik=GtKbsvKiSUnc9w&riu=http%3a%2f%2fwww.fashionhombre.com%2fwp-content%2fuploads%2f2019%2f10%2fBest-Fall-Casual-Work-Outfits-For-Women-9-1.jpg&ehk=qwaLhW6lDPtn4N3ya4L7P%2fk3ns8kbyhoxlHD9yHN4VI%3d&risl=&pid=ImgRaw&r=0' alt='Casual Wear'/>
                <h3>Casual Wear</h3>
                <p> Choose your comfort</p>
            </div>
            <div className='card'>
                <img src='https://tse3.mm.bing.net/th/id/OIP.4LawZ7i-_2YpRQd7ruUhJwHaNK?rs=1&pid=ImgDetMain&o=7&rm=3' alt='Business Wear'/>
                <h3>Business Wear</h3>
                <p>Follow your goal</p>
            </div>
            <div className='card'>
                <img src='https://cdn.shopify.com/s/files/1/0139/3419/8884/products/EP00824BD-R6.jpg?v=1668594092' alt='Party wear'/>
                <h3>Party wear</h3>
                <p>Enjoy the vibe</p>
            </div>
             <div className='card'>
                <img src='data:image/webp;base64,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' alt='Kurthis'/>
                <h3>Kurthis</h3>
                <p>Comfortable</p>
            </div>

            </div>
        </div>
    )
}
export default Clothing;
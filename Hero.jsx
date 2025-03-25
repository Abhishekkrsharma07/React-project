const HeroSection=()=>{
    return <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quisquam mollitia praesentium reprehenderit hic exercitationem at non facere vo At, molestias! Placeat doloremque suscipit neque eveniet esse nostrum ducimus omnis aliquam pariatur, mollitia enim exercitationem!</p>

            <div className="hero-btn">
                <button>Shop-Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="Shoping">
                <p>Available on</p>
            </div>

            <div className="brand-icon">
                <img src="/images/amazone.png" alt="Amazone" style={{width:'2cm', height:'2cm'}}/>
                <img src="/images/flipkart.png" alt="flipkart" style={{width:'2cm', height:'2cm'}} />

            </div>
        </div>
        <div className="hero-image">
            <img src="/images/nikeshoes.webp" alt="Shoes" />
        </div>
    </main>;
};
export default HeroSection;
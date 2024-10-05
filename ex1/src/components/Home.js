import React from 'react';

function Home() {
  return (
    <div className="container mt-5">
      <h1>Welcome to Nikon Cameras</h1>
      <p>Nikon Cameras specializes in providing high-quality cameras that capture life's moments with precision and clarity. Whether you're a professional photographer or an amateur enthusiast, our range of cameras caters to all your needs.</p>
      
      <div className="row mt-4">
        <div className="col-md-4">
          <img src="/assets/D7500.jpg" className="img-fluid rounded" alt="Nikon D7500" width="400" height="400"/>
          <br />
          <br />
          <h2>Nikon D7500</h2>
          <p>The Nikon D7500 is a powerful DSLR camera designed for enthusiasts and professionals alike. With a 20.9-megapixel CMOS sensor and EXPEED 5 image processor, it delivers stunning image quality and exceptional performance in various shooting conditions. It features a versatile 51-point autofocus system, 4K UHD video recording capability, and a tilting touchscreen LCD for easy navigation and control.</p>
        </div>
        <div className="col-md-4">
          <img src="/assets/ZF.jpeg" className="img-fluid rounded" alt="Nikon ZF" width="400" height="400"/>
          <br />
          <br />
          <h2>Nikon ZF</h2>
          <p>The Nikon ZF is a mirrorless camera that combines cutting-edge technology with sleek design. Equipped with a full-frame 24.5-megapixel CMOS sensor and EXPEED 6 image processor, it delivers superior image quality and high-speed performance. The ZF features 273-point hybrid autofocus, 4K UHD video recording, and a large electronic viewfinder for precise composition. Its compact and lightweight body makes it ideal for travel and everyday shooting.</p>
        </div>
        <div className="col-md-4">
          <img src="/assets/D5300.jpeg" className="img-fluid rounded" alt="Nikon D5300" width="300" height="300"/>
          <br />
          <br />
          <h2>Nikon D5300</h2>
          <p>The Nikon D5300 is a versatile DSLR camera suitable for beginners and experienced photographers. It features a 24.2-megapixel DX-format CMOS sensor and EXPEED 4 image processor, delivering sharp, detailed images with vibrant colors. The D5300 offers built-in Wi-Fi and GPS connectivity, allowing you to easily share your photos and track your adventures. With its vari-angle LCD monitor and comprehensive shooting modes, it provides creative freedom and flexibility in every shot.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

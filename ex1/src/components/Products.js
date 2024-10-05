import React from 'react';

function Products() {
  return (
    <div className="container mt-5">
      <h1>Our Products</h1>
      <br/>
      <h2>Mirrorless Cameras</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="/assets/ZF.jpeg" className="img-fluid rounded" alt="Nikon ZF" width="400" height="400"/>
          <h2>Nikon ZF</h2>
          <ul>
            <li>Full-frame 24.5MP CMOS sensor</li>
            <li>EXPEED 6 image processor</li>
            <li>273-point hybrid AF system</li>
            <li>4K UHD video recording</li>
            <li>Large electronic viewfinder</li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/assets/Z6.jpg" className="img-fluid rounded" alt="Nikon Z6" width="300" height="300"/>
          <h2>Nikon Z6</h2>
          <ul>
            <li>Full-frame 24.5MP BSI CMOS sensor</li>
            <li>EXPEED 6 image processor</li>
            <li>273-point hybrid AF system</li>
            <li>4K UHD video recording</li>
            <li>In-body 5-axis VR stabilization</li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/assets/Z7.jpeg" className="img-fluid rounded" alt="Nikon Z7" width="300" height="300"/>
          <h2>Nikon Z7</h2>
          <ul>
            <li>Full-frame 45.7MP BSI CMOS sensor</li>
            <li>EXPEED 6 image processor</li>
            <li>493-point hybrid AF system</li>
            <li>4K UHD video recording</li>
            <li>Large electronic viewfinder</li>
          </ul>
        </div>
      </div>

      <h2 className="mt-5">DSLR Cameras</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="/assets/D850.jpeg" className="img-fluid rounded" alt="Nikon D850" width="300" height="300"/>
          <h2>Nikon D850</h2>
          <ul>
            <li>Full-frame 45.7MP BSI CMOS sensor</li>
            <li>EXPEED 5 image processor</li>
            <li>153-point AF system</li>
            <li>4K UHD video recording</li>
            <li>3.2-inch tilting touchscreen LCD</li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/assets/D5300.jpeg" className="img-fluid rounded" alt="Nikon D5300" width="300" height="300"/>
          <h2>Nikon D5300</h2>
          <ul>
            <li>APS-C 24.2MP CMOS sensor</li>
            <li>EXPEED 4 image processor</li>
            <li>39-point AF system</li>
            <li>1080p Full HD video recording</li>
            <li>Vari-angle LCD monitor</li>
          </ul>
        </div>
        <div className="col-md-4">
          <img src="/assets/D7500.jpg" className="img-fluid rounded" alt="Nikon D7500" width="400" height="400"/>
          <h2>Nikon D7500</h2>
          <ul>
            <li>APS-C 20.9MP CMOS sensor</li>
            <li>EXPEED 5 image processor</li>
            <li>51-point AF system</li>
            <li>4K UHD video recording</li>
            <li>Tilting touchscreen LCD</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;

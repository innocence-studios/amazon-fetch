# amazon-fetch
Amazon API
## Usage
```js

fetch('B0BLGFY48N')
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Expected output:
Amazon {
  id: 'B0BLGFY48N',
  name: 'ASUS ROG Strix GeForce RTX® 4090 Gaming Graphics Card (PCIe 4.0, 24GB GDDR6X, HDMI 2.1a, DisplayPort 1.4a)',
  price: 1949.99,
  rating: 0.9,
  about: [
    'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency',
    '4th Generation Tensor Cores: Up to 2X AI performance',
    '3rd Generation RT Cores: Up to 2X ray tracing performance',
    'Axial-tech fans scaled up for 23% more airflow',
    'New patented vapor chamber with milled heatspreader for lower GPU temps',
    '3.5-slot design: massive fin array optimized for airflow from the three Axial-tech fans, Diecast shroud, frame, and backplate add rigidity and are vented to further maximize airflow and heat dissipation.',
    'Digital power control with high-current power stages and 15K capacitors to fuel maximum performance.',
    'GPU Tweak III software provides intuitive performance tweaking, thermal controls, and system monitoring'
  ],
  data: [
    [ 'Graphics Coprocessor', 'NVIDIA GeForce RTX 4090' ],
    [ 'Brand', 'ASUS' ],
    [ 'Graphics Ram Size', '24 GB' ],
    [ 'GPU Clock Speed', '2.61 GHz' ],
    [ 'Video Output Interface', 'DisplayPort, HDMI' ]
  ]
}
```

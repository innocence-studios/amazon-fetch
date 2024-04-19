const { get } = require('axios');
const { JSDOM } = require('jsdom');
const Amazon = require('./Amazon.js');

/**
 * @function
 * @param {String} id 
 * @returns {Promise<Amazon>}
 * @example
 * import { fetch } from 'amazon-fetch';
 * 
 * fetch('B0BLGFY48N')
 *  .then(price => console.log(price))
 *  .catch(err => console.error(err));
 * 
 * // Expected output:
 * Amazon {
 *   id: 'B0BLGFY48N',
 *   name: 'ASUS ROG Strix GeForce RTX® 4090 Gaming Graphics Card (PCIe 4.0, 24GB GDDR6X, HDMI 2.1a, DisplayPort 1.4a)',
 *   price: 1949.99,
 *   rating: 0.9,
 *   about: [
 *     'NVIDIA Ada Lovelace Streaming Multiprocessors: Up to 2x performance and power efficiency',
 *     '4th Generation Tensor Cores: Up to 2X AI performance',
 *     '3rd Generation RT Cores: Up to 2X ray tracing performance',
 *     'Axial-tech fans scaled up for 23% more airflow',
 *     'New patented vapor chamber with milled heatspreader for lower GPU temps',
 *     '3.5-slot design: massive fin array optimized for airflow from the three Axial-tech fans, Diecast shroud, frame, and backplate add rigidity and are vented to further maximize airflow and heat dissipation.',
 *     'Digital power control with high-current power stages and 15K capacitors to fuel maximum performance.',
 *     'GPU Tweak III software provides intuitive performance tweaking, thermal controls, and system monitoring'
 *   ],
 *   data: [
 *     [ 'Graphics Coprocessor', 'NVIDIA GeForce RTX 4090' ],
 *     [ 'Brand', 'ASUS' ],
 *     [ 'Graphics Ram Size', '24 GB' ],
 *     [ 'GPU Clock Speed', '2.61 GHz' ],
 *     [ 'Video Output Interface', 'DisplayPort, HDMI' ]
 *   ]
 *  }
 */
module.exports = async function fetch(id) {
  try {
    const response = await get(`https://www.amazon.com/dp/${id}`);
    const DOM = new JSDOM(response.data);
    const document = DOM.window.document;

    let name = document.querySelector('span#productTitle').textContent.trim();

    let price = parseFloat(document.querySelector('span.a-price-whole').textContent.replace(',', '')) + (parseFloat(document.querySelector('span.a-price-fraction').textContent.replace(',', ''))) / 100;

    let rating = parseFloat(document.querySelector('i.a-icon.a-icon-star').textContent.split(' ')[0]) / 5;
    
    let about = [];
    for (let detail of document.querySelector('ul.a-unordered-list.a-vertical.a-spacing-mini').children){
      about.push(detail.textContent.trim());
    };

    let data = [];
    for (let row of document.querySelector('table.a-normal.a-spacing-micro').children[0].children){
      data.push([row.cells[0].textContent.trim(), row.cells[1].textContent.trim()]);
    };
    
    if (!name) throw new Error('Invalid ID?');
    return new Amazon(id, name, price, rating, about, data);
  } catch (error) {
    throw error;
  };
};

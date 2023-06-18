import React, { useState } from 'react';

const Sidebar = ({ handleFilter }) => {
  const [showBrand, setShowBrand] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showPriceRange, setShowPriceRange] = useState(false);

  const handleBrandFilter = (brand) => {
    handleFilter('brand', brand);
  };

  const handleCategoryFilter = (category) => {
    handleFilter('category', category);
  };

  const handleColorFilter = (color) => {
    handleFilter('color', color);
  };

  const handleSizeFilter = (size) => {
    handleFilter('size', size);
  };

  const handlePriceRangeFilter = (priceRange) => {
    handleFilter('priceRange', priceRange);
  };

  const toggleArrow = (stateSetter) => {
    stateSetter((prevState) => !prevState);
  };

  return (
    <div className="sidebar">
      <div className="filter">
        <h3>Brand</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowBrand)}>
            Select Brand {showBrand ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showBrand && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Pragon" onChange={() => handleBrandFilter('Pragon')} />
                Pragon
              </label>
              <label>
                <input type="radio" value="VKC" onChange={() => handleBrandFilter('VKC')} />
                VKC
              </label>
              <label>
                <input type="radio" value="Relaxo" onChange={() => handleBrandFilter('Relaxo')} />
                Relaxo
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Category</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowCategory)}>
            Select Category {showCategory ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showCategory && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Chappals" onChange={() => handleCategoryFilter('Chappals')} />
                Chappal
              </label>
              <label>
                <input type="radio" value="Sandals" onChange={() => handleCategoryFilter('Sandals')} />
                Sandal
              </label>
              <label>
                <input type="radio" value="Shoes" onChange={() => handleCategoryFilter('Shoes')} />
                Shoes
              </label>
              <label>
                <input type="radio" value="Slippers" onChange={() => handleCategoryFilter('Slippers')} />
                Shoes
              </label>
              
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Color</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowColor)}>
            Select Color {showColor ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showColor && (
            <div className="subcategories">
              <label>
                <input type="radio" value="Red" onChange={() => handleColorFilter('Red')} />
                Red
              </label>
              <label>
                <input type="radio" value="Blue" onChange={() => handleColorFilter('Blue')} />
                Blue
              </label>
              <label>
                <input type="radio" value="Green" onChange={() => handleColorFilter('Green')} />
                Green
              </label>
              <label>
                <input type="radio" value="Yellow" onChange={() => handleColorFilter('Yellow')} />
                Yellow
              </label>
              <label>
                <input type="radio" value="Orange" onChange={() => handleColorFilter('Orange')} />
                Orange
              </label>
              <label>
                <input type="radio" value="Purple" onChange={() => handleColorFilter('Purple')} />
                Purple
              </label>
              <label>
                <input type="radio" value="Pink" onChange={() => handleColorFilter('Pink')} />
                Pink
              </label>
              <label>
                <input type="radio" value="Brown" onChange={() => handleColorFilter('Brown')} />
                Brown
              </label>
              <label>
                <input type="radio" value="Black" onChange={() => handleColorFilter('Black')} />
                Black
              </label>
              <label>
                <input type="radio" value="White" onChange={() => handleColorFilter('White')} />
                White
              </label>
              <label>
                <input type="radio" value="Gray" onChange={() => handleColorFilter('Gray')} />
                Gray
              </label>
              <label>
                <input type="radio" value="Silver" onChange={() => handleColorFilter('Silver')} />
                Silver
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Size</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowSize)}>
            Select Size {showSize ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showSize && (
            <div className="subcategories">
             <label>
                <input type="radio" value="5" onChange={() => handleSizeFilter('5')} />
                5
              </label>
              <label>
                <input type="radio" value="6" onChange={() => handleSizeFilter('6')} />
                6
              </label>
              <label>
                <input type="radio" value="7" onChange={() => handleSizeFilter('7')} />
                7
              </label>
              <label>
                <input type="radio" value="8" onChange={() => handleSizeFilter('8')} />
                8
              </label>
              <label>
                <input type="radio" value="9" onChange={() => handleSizeFilter('9')} />
                9
              </label>
              <label>
                <input type="radio" value="10" onChange={() => handleSizeFilter('10')} />
                10
              </label>
              <label>
                <input type="radio" value="11" onChange={() => handleSizeFilter('11')} />
                11
              </label>
              <label>
                <input type="radio" value="12" onChange={() => handleSizeFilter('12')} />
                12
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="filter">
        <h3>Price Range</h3>
        <div className="dropdown">
          <div className="dropdown-toggle" onClick={() => toggleArrow(setShowPriceRange)}>
            Select Price Range {showPriceRange ? <span>&#9650;</span> : <span>&#9660;</span>}
          </div>
          {showPriceRange && (
            <div className="subcategories">
              <label>
                <input type="radio" value="0 - 499" onChange={() => handlePriceRangeFilter('0 - 499')} />
                Under- Rs.499
              </label>
              <label>
                <input type="radio" value="500 - 999" onChange={() => handlePriceRangeFilter('500 - 999')} />
                Rs. 500 - 999
              </label>
              <label>
                <input type="radio" value="1000 - 1999" onChange={() => handlePriceRangeFilter('1000 - 1999')} />
                Rs. 1000 - 1999
              </label>
              <label>
                <input type="radio" value="2000 - 3000" onChange={() => handlePriceRangeFilter('2000 - 3000')} />
                Rs. 2000 - 3000
              </label>
             
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

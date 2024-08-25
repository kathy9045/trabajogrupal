import React, { useState, useEffect } from 'react'; // Asegúrate de importar useEffect
import './App.css';
import mueble1 from './images/mueble1.png';
import mueble2 from './images/mueble2.png';
import mueble3 from './images/mueble3.png';
import mueble4 from './images/mueble4.png';
import mueble5 from './images/mueble5.png';
import mueble6 from './images/mueble6.png';
import mueble7 from './images/mueble7.png';
import mueble8 from './images/mueble8.png';
import mueble9 from './images/mueble9.png';
import mueble10 from './images/mueble10.png';
import mueble11 from './images/mueble11.png';
import mueble12 from './images/mueble12.png';
import userIcon from './images/user-icon.png';
import welcomeGif from './images/welcome.gif'; 
import Cart from './Cart';
import Mueble from './Mueble';
import CheckoutForm from './CheckoutForm';
import axios from 'axios';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMueble, setSelectedMueble] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [viewCart, setViewCart] = useState(false);
  const [viewFavorites, setViewFavorites] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [message, setMessage] = useState('');
  const [viewHome, setViewHome] = useState(true); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('https://api.example.com/items'); 
        setItems(response.data);
      } catch (error) {
        console.error('Error al obtener los datos', error);
      }
    };

    fetchItems();
  }, []);

  const generateStars = () => Array(5).fill(true);

  const muebles = [
    { name: 'Mueble 1', image: mueble1, stars: generateStars(), description: 'Descripción del Mueble 1', price: 2200000 },
    { name: 'Mueble 2', image: mueble2, stars: generateStars(), description: 'Descripción del Mueble 2', price: 2000000 },
    { name: 'Mueble 3', image: mueble3, stars: generateStars(), description: 'Descripción del Mueble 3', price: 2500000 },
    { name: 'Mueble 4', image: mueble4, stars: generateStars(), description: 'Descripción del Mueble 4', price: 2500000 },
    { name: 'Mueble 5', image: mueble5, stars: generateStars(), description: 'Descripción del Mueble 5', price: 2100000 },
    { name: 'Mueble 6', image: mueble6, stars: generateStars(), description: 'Descripción del Mueble 6', price: 2000000 },
    { name: 'Mueble 7', image: mueble7, stars: generateStars(), description: 'Descripción del Mueble 7', price: 2600000 },
    { name: 'Mueble 8', image: mueble8, stars: generateStars(), description: 'Descripción del Mueble 8', price: 1400000 },
    { name: 'Mueble 9', image: mueble9, stars: generateStars(), description: 'Descripción del Mueble 9', price: 2900000 },
    { name: 'Mueble 10', image: mueble10, stars: generateStars(), description: 'Descripción del Mueble 10', price: 1900000 },
    { name: 'Mueble 11', image: mueble11, stars: generateStars(), description: 'Descripción del Mueble 11', price: 2200000 },
    { name: 'Mueble 12', image: mueble12, stars: generateStars(), description: 'Descripción del Mueble 12', price: 2400000 },
  ];

  const filteredMuebles = muebles.filter(mueble =>
    mueble.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleImageClick = (mueble) => {
    setSelectedMueble(mueble);
  };

  const handleAddToCart = (mueble) => {
    setCartItems([...cartItems, mueble]);
    setMessage(`El mueble "${mueble.name}" se ha añadido al carrito.`);
    setTimeout(() => setMessage(''), 5000); 
  };

  const handleViewCart = () => {
    setViewCart(true);
    setViewFavorites(false);
    setViewHome(false); 
    setSelectedMueble(null);
  };

  const handleBackToCatalog = () => {
    setViewCart(false);
    setViewFavorites(false);
    setViewHome(false); 
    setSelectedMueble(null);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseImageViewer = () => {
    setSelectedMueble(null);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    setShowCheckoutForm(true);
  };

  const handleCloseCheckoutForm = () => {
    setShowCheckoutForm(false);
  };

  const handleToggleFavorite = (mueble, isFavorite) => {
    const newFavorites = new Set(favorites);
    if (isFavorite) {
      newFavorites.add(mueble.name);
    } else {
      newFavorites.delete(mueble.name);
    }
    setFavorites(newFavorites);
  };

  const handleViewFavorites = () => {
    setViewFavorites(true);
    setViewCart(false);
    setViewHome(false); 
    setSelectedMueble(null);
  };

  const handleViewHome = () => {
    setViewHome(true);
    setViewCart(false);
    setViewFavorites(false);
    setSelectedMueble(null);
  };

  return (
    <div className="App">
      <nav className="navbar">
        <button className="menu-button">&#9776;</button>
        <div className="logo">MegaMuebles</div>
        <div className="menu-links">
          <a href="#home" onClick={handleViewHome}>Inicio</a>
          <a href="#catalogo" onClick={() => { setViewHome(false); handleBackToCatalog(); }}>Catálogo</a>
          <a href="#favorites" onClick={handleViewFavorites}>Favoritos</a>
          <a href="#cart" onClick={handleViewCart}>Carrito</a>
          <a href="#contact">Contáctenos</a>
        </div>
        <div className="search-cart-container">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Buscar" 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
        <div className="user-info">
          <img src={userIcon} alt="User" className="user-icon" />
          <span>Dayana Aguilar</span>
        </div>
      </nav>

      {viewHome && (
        <div id="home" className="welcome-section">
          <h1>¡Bienvenido!</h1>
          <p>Conoce nuestros nuevos productos y encuentra 
            los muebles perfectos para tu hogar.</p>
          <img src={welcomeGif} alt="Bienvenida" />
        </div>
      )}

      <div id="catalogo" className={`tab-content ${viewHome ? 'hidden' : ''}`}>
        {viewCart ? (
          <div>
            <Cart 
              cartItems={cartItems} 
              onRemoveFromCart={(index) => setCartItems(cartItems.filter((_, i) => i !== index))}
              totalPrice={totalPrice}
              onCheckout={handleCheckout}
            />
            {showCheckoutForm && (
              <CheckoutForm onClose={handleCloseCheckoutForm} />
            )}
          </div>
        ) : viewFavorites ? (
          <div className="mueble-container">
            {muebles.filter(mueble => favorites.has(mueble.name)).length > 0 ? (
              muebles.filter(mueble => favorites.has(mueble.name)).map((mueble, index) => (
                <Mueble
                  key={index}
                  mueble={mueble}
                  onImageClick={handleImageClick}
                  onAddToCart={handleAddToCart}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={true}
                />
              ))
            ) : (
              <p>No tienes muebles en tus favoritos.</p>
            )}
          </div>
        ) : selectedMueble ? (
          <div className="detail-viewer">
            <div className="detail-content">
              <img src={selectedMueble.image} alt={selectedMueble.name} className="detail-image" />
              <div className="detail-info">
                <h2>{selectedMueble.name}</h2>
                <p>{selectedMueble.description}</p>
                <p><strong>Precio:</strong> ${selectedMueble.price.toLocaleString()}</p>
                <div className="stars">
                  {selectedMueble.stars.map((_, index) => (
                    <i key={index} className={`fa fa-star ${index < selectedMueble.stars.length ? 'filled' : ''}`}></i>
                  ))}
                </div>
                <button onClick={() => handleAddToCart(selectedMueble)} className="add-to-cart-button">Agregar al carrito</button>
                <button onClick={handleBackToCatalog} className="back-to-catalog-button">Volver al catálogo</button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {message && <div className="message">{message}</div>}
            <div className="mueble-container">
              {filteredMuebles.length > 0 ? (
                filteredMuebles.map((mueble, index) => (
                  <Mueble
                    key={index}
                    mueble={mueble}
                    onImageClick={handleImageClick}
                    onAddToCart={handleAddToCart}
                    onToggleFavorite={handleToggleFavorite}
                    isFavorite={favorites.has(mueble.name)}
                  />
                ))
              ) : (
                <p>No se encontraron muebles.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;


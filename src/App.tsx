import { sampleProduct } from './data';
import './App.css';

function App() {
  return (
    <>
      <div>
        <header>asempaBrand</header>
        <main>
          <ul>
            {sampleProduct.map((product) => (
              <li key={product.slug}>
                <img
                  src={product.images}
                  alt={product.name}
                  className="product-image"
                />
                <h2>{product.name}</h2>
                <p>&#8373; {product.price}</p>
              </li>
            ))}
          </ul>
        </main>
        <footer>all right reserved</footer>
      </div>
    </>
  );
}

export default App;

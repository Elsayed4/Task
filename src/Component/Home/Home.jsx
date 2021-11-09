import './../../App.css';
import {useState,useEffect} from 'react';
function Home() {
    const [products,setProducts] = useState([]);

    useEffect(() => { 
       getProducts();
    }, [])

    const getProducts = () =>{
        return fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>setProducts(json))
    }

    return (
    <section className="container" id="Home">
      <h2 >All Products On Cards</h2>
        <div className="row">
          {
            products.map((product,i)=>{
                return <div className="col-4" key={i}>
                <div className="card">
                <img src={product.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
                    </div>
            })
          }
        </div>
    </section>
  
    );
}

export default Home;

import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCT=[
  {
    id:"p1",
    title:"first book",
    price:90,
    description:"this is first book"

  },
  {
    id:"p2",
    title:"second book",
    price:90,
    description:"this is second book"
  }

]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
      {DUMMY_PRODUCT.map((product)=>(
        <ProductItem
        key={product.id}
        id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />
      ))}
       
      </ul>
    </section>
  );
};

export default Products;

import {useHistory} from 'react-router';

const Products = () => {

  const history = useHistory();

  return(
    <div>
      <h1>Welcome to the products page!</h1>
      <button onClick={() => {
        history.push('/home')
      }}>Back to Home</button>
    </div>
  )
};

export default Products;
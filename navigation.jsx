import {useHistory} from 'react-router';

const Navigation = () => {

  const history = useHistory();

  return (
    <div>
      <div>
        <div onClick={() => {
          history.push('/home')
        }}>Home</div>
        <div onClick={() => {
          history.push('/products')
        }}>Products</div>
        <div onClick={() => {
          history.push('/contact')
        }}>Contact</div>
      </div>
    </div>
  )

};

export default Navigation;
import { useParams } from 'react-router-dom';
import products from './data.js';

export default function SingleProduct() {
  const { productId } = useParams();

  const product = products.find((product) => product.id === productId);

  const { name, image } = product;

  return (
    <div className='p-8'>
      <h1 className='text-3xl font-bold mb-4'>{name}</h1>
      <img src={image} alt={name} className='w-1/2' />
    </div>
  );
}

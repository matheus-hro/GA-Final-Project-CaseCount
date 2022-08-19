
import './AddToCartBtn.css';

export default function AddToCart(props){
  const setOpenModal = props.setModalOpen;
  return (
    <button 
      className='addToCart-btn'
      onClick={() => props.setOpenModal(true)}>add to cart</button>

  )
}
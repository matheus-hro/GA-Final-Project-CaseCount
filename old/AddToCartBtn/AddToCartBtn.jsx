
import './AddToCartBtn.css';
import classNames from 'classnames';

export default function AddToCart(props){
  const setOpenModal = props.setModalOpen;
  const btnClass = classNames('addToCart-btn')
  return (
    <button 
      className={btnClass}
      onClick={() => props.setOpenModal(true)}>add to cart</button>

  )
}
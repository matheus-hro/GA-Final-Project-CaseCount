import './CanvasBtn.css';
import classNames from 'classnames';

export default function CanvasBtn(props){
  const setOpenModal = props.setModalOpen;
  const btnClass = classNames('canvas-btn', props.className)
  return (
    <button 
      className={btnClass}
      onClick={() => props.handleClick(true)}
      >{props.text}
    </button>

  )
}
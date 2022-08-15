import Dropdown from 'react-bootstrap/Dropdown';
import './PhoneDropDown.css'

export default function PhoneDropdown() {
  return (
    <Dropdown className='dropdown'>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Phone
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">iPhone</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pixel 4</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}


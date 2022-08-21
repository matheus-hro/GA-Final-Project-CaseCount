import Dropdown from 'react-bootstrap/Dropdown';

export default function PhoneDropdown(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="dark" id="dropdown-basic count">
        Select your phone
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">iPhone</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Pixel 4</Dropdown.Item>
   
      </Dropdown.Menu>
    </Dropdown>
  );
}


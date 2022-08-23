import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function PhoneDropdown(props) {
  const setCaseModel = props.setCaseModel;
  const availableCases = props.availableCases;
 
  return (
    <DropdownButton
      id="dropdown-basic-button"
      variant="dark"
      title="Select your phone"
      onSelect={setCaseModel}
    >
      {availableCases.map((e, index) => (
        <Dropdown.Item key={index} href="#/action-1">
          {e.phoneModel} {e.type} - ${e.basePrice}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  
  );
}

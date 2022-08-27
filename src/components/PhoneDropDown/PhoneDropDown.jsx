import { Dropdown, DropdownButton } from "react-bootstrap";

export default function PhoneDropdown(props) {
  const setCaseModel = props.setCaseModel;
  const availableCases = props.availableCases;

  return (
    <div className="dropdown-container">
      <h4 className="picker-title">Select your phone and case</h4>
      <DropdownButton
        id="dropdown-basic-button"
        variant="dark"
        title={props.label}
        onSelect={(x) => setCaseModel(x)}
      >
        {availableCases.map((e, i) => (
          <Dropdown.Item key={i} eventKey={e.productId}>
            {`${e.name} - $${e.displayPrice}`}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>

  );
}

import { Dropdown, DropdownButton } from "react-bootstrap";

export default function PhoneDropdown(props) {
  const setCaseModel = props.setCaseModel;
  const availableCases = props.availableCases;

  return (
    <>
      Select your phone and case
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
    </>

  );
}

import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu
} from 'reactstrap'


const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle1 = () => setDropdownOpen(!dropdownOpen);
  const toggle2 = () => setDropdownOpen(!dropdownOpen);


  return (
    <div id="header">
      <Nav>
        <NavItem>
          <NavLink href="/" active>Home</NavLink>
        </NavItem>
        <UncontrolledDropdown>
          <DropdownToggle nav caret>
            Pets
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem> <NavLink id="dropdownpetindex" href="/petindex" active>All Pets</NavLink> </DropdownItem>
            <DropdownItem divider />
            // <DropdownItem> <NavLink id="dropdownpetshow" href="/petshow" active>Pet Search</NavLink> </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Dropdown nav isOpen={dropdownOpen} toggle={toggle2}>
          <DropdownToggle nav caret>
            Users
            </DropdownToggle>
          <DropdownMenu>
            {/* <DropdownItem> <NavLink href="/" active>Sign In</NavLink> </DropdownItem> */}
            <DropdownItem> <NavLink id="dropdownusernew" href="/usernew" active>Sign Up</NavLink> </DropdownItem>
            <DropdownItem divider />
            <DropdownItem> <NavLink id="dropdownusershow" href="/userindex" active>User Profiles</NavLink> </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </div>
  );
}
export default Header

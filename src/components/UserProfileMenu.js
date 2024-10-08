import React, { useState } from "react";
import styled from "styled-components";

const ProfileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  font-size: 1.2rem;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const Menu = styled.div`
  position: absolute;
  top: 40px; 
  right: 0;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;

const UserProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    // Lógica para cerrar sesión
    alert("Cerrando sesión...");
  };

  return (
    <div style={{ position: "relative" }}>
      <ProfileButton onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        Perfil
      </ProfileButton>
      <Menu isOpen={isOpen} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
        <MenuItem>Perfil</MenuItem>
        <MenuItem>Ajustes de Perfil</MenuItem>
        <MenuItem onClick={handleLogout}>Cerrar sesión</MenuItem>
      </Menu>
    </div>
  );
};

export default UserProfileMenu;

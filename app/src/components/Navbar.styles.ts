import styled from "styled-components";

// Container principal da Navbar
export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${(props) => props.theme.primaryBlack};
  color: ${(props) => props.theme.primaryWhite};
  padding: 1rem 2rem;
  z-index: 10;
`;

// Promoção/Oferta
export const PromoBanner = styled.div`
  background-color: rgb(24, 130, 114);
  color: white;
  text-align: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  span {
    display: inline-block;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// Logo
export const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  margin: 0;
  color: ${(props) => props.theme.primaryWhite};
`;

// Links de Navegação
export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primaryWhite}
    font-size: 1rem;

    &:hover {
      color: ${(props) => props.theme.primaryBlack};
    }
  }

  &.open {
    display: block;
  }

  @media (max-width: 768px) {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #333;
    padding: 1rem;
    z-index: 100;
  }
`;

// Lista de Links de Navegação
export const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
`;

// Item da Navegação
export const NavItem = styled.li``;

// Link de Navegação
export const NavLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    color: #ff4d00;
  }
`;

// Menu Toggle (Hamburguer)
export const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

// Ícone do Menu (Hamburguer)
export const MenuIcon = styled.div`
  width: 30px;
  height: 3px;
  background-color: ${(props) => props.theme.primaryWhite};
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.primaryWhite};
    left: 0;
    transition: transform 0.3s ease;
  }
  &::before {
    top: -8px;
  }
  &::after {
    top: 8px;
  }
  &:hover::before {
    transform: rotate(45deg) translate(5px, 5px);
  }
  &:hover::after {
    transform: rotate(-45deg) translate(5px, -5px);
  }
`;

import { useState } from 'react'
import {
  HeaderStyle,
  Item,
  MobileMenu,
  MenuButton,
  CloseButton,
} from './styles'
import { FiMenu, FiX } from 'react-icons/fi'

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <HeaderStyle>
        <div>
          <img src="Logo-v2.png" alt="Logo do projeto" />
          <h1>MENTE ABERTA</h1>
        </div>

        <nav className="desktop-menu">
          <Item href="#">Inicio</Item>
          <Item href="#">Descubra</Item>
          <Item href="#">Sobre o projeto</Item>
          <Item href="#">Contato</Item>
        </nav>

        <MenuButton onClick={() => setMenuOpen(true)}>
          <FiMenu size={28} />
        </MenuButton>
      </HeaderStyle>

      <MobileMenu open={menuOpen}>
        <CloseButton onClick={() => setMenuOpen(false)}>
          <FiX size={28} />
        </CloseButton>
        <Item href="#" onClick={() => setMenuOpen(false)}>
          Inicio
        </Item>
        <Item href="#" onClick={() => setMenuOpen(false)}>
          Descubra
        </Item>
        <Item href="#" onClick={() => setMenuOpen(false)}>
          Sobre o projeto
        </Item>
        <Item href="#" onClick={() => setMenuOpen(false)}>
          Contato
        </Item>
      </MobileMenu>
    </>
  )
}

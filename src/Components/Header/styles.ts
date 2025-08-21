import styled from 'styled-components'

export const HeaderStyle = styled.div`
  background: #f9f9f9;
  color: #000;
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  > div h1 {
    color: #4a90e2;
    font-size: 1.5rem;
  }

  > div img {
    width: 60px;
    height: 60px;
  }

  .desktop-menu {
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
      display: none;
    }
  }
`

export const Item = styled.a`
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #0077ff;
  }
`

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`

export const MobileMenu = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? '0' : '-100%')};
  height: 100vh;
  width: 70%;
  background: #f9f9f9;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  transition: right 0.3s ease-in-out;
  z-index: 2000;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
`

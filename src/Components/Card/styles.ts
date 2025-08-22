import styled from 'styled-components'

export const StyledCard = styled.div`
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

export const Icon = styled.div`
  font-size: 2rem;
  color: #0077ff;
  margin-bottom: 1rem;
`

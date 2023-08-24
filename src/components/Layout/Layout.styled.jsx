import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 0;
  justify-content: center;
  border: 3px dashed #fff;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  text-transform: uppercase;
  font-weight: 700;
  transform: scale(1);
  color: #fff;
  &.active {
    transform: scale(1.3);
    color: #f0d24c;
  }
`;

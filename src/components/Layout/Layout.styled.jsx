import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  display: flex;
  gap: 30px;
  padding: 20px 0 0;
  justify-content: center;
  border: 3px dashed #fff;
  border-radius: 10px 10px 0 0;
  margin-bottom: 20px;
`;

export const Link = styled(NavLink)`
  padding: 20px 80px;

  text-transform: uppercase;
  font-weight: 700;
  font-size: 26px;
  color: #fff;
  background-color: #e8e1d1;
  border-radius: 10px 10px 0 0;
  &.active {
    color: #964b00;
    background-color: #f0d24c;
  }
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Poster = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 15px;
  border-radius: 10px;
`;
export const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: flex-end;
  margin-bottom: 15px;
`;

export const Wrap = styled.div`
  padding: 10px;
  display: flex;
  gap: 15px;
  background-color: #aa9c66;
`;
export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapInformation = styled.div`
  min-height: 320px;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const NavList = styled.ul`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const TextTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 16px;
  margin-bottom: 35px;
`;
export const Link = styled(NavLink)`
  padding: 10px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #e8e1d1;
  transform: scale(1);
  min-width: 100px;
  border-radius: 10px 10px 0 0;
  &.active {
    background-color: #6c7c74;
    color: #fff;
    font-size: 24px;
  }
`;

export const WrapCastReview = styled.div`
  width: 495px;
`;

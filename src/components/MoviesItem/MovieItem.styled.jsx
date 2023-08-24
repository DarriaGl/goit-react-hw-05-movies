import styled from 'styled-components';

export const Item = styled.li`
  width: 200px;
  overflow: hidden;
  border-radius: 10px;
  scale: 1
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    scale: 1.05;
    box-shadow: 0px 0px 19px 3px #f0d24c;
  }
  margin-bottom: 10px;
`;

export const Poster = styled.img`
  height: 300px;
  object-fit: cover;
  object-position: center;
  margin-bottom: 15px;
  border-radius: 10px;
`;
export const Title = styled.p`
  width: 200px;
  overflow: hidden;
  margin-bottom: 10px;
  padding-left: 15px;
`;

export const VoteAverage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 15px;
`;

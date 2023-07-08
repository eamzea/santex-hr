import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 5rem;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 12.5rem;
`;

export const Info = styled.div`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  margin: 0.25rem 0 .5rem 0;
`;
export const Variant = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem 0 .5rem 0;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Price = styled.ul`
font-size: .75rem;
  margin-bottom: 0;
  padding-inline-start: .75rem;
`;

export const Buy = styled.button`
  border: none;
  background-color: #9d6381;
  color: #fffffc;
  padding: 1rem 3rem;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all .25s;
  align-self: end;

  &:hover {
    background-color: #9d6391;
  }
`;

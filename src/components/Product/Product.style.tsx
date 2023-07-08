import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  background-color: rgb(200, 200, 200);
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 0.75rem;
`;

export const Description = styled.p`
  font-size: 0.75rem;
  margin: 0.25rem 0;
`;
export const Variant = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;
export const Price = styled.p`
  margin-bottom: 0;
`;

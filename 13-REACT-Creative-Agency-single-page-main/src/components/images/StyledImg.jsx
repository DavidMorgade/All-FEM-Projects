import styled from 'styled-components';

const StyledImg = styled.img`
  object-fit: ${(props) => props.Object};
  height: ${(props) => props.Height};
  width: ${(props) => props.Width};
  display: block;
  @media (min-width: 768px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: flex-end;
  }
`;

const Image = ({ src, alt, Object, Height, Width }) => {
  return (
    <StyledImg
      src={src}
      alt={alt}
      Object={Object}
      Height={Height}
      Width={Width}
    />
  );
};

export { Image };

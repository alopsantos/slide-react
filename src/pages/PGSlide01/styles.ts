import styled, { keyframes } from 'styled-components';

const cycleImages = keyframes`
  25% {
    opacity: 1;
  }
  40% {
    opacity: 0;
  }
`;
const zoom = keyframes`
  100% {
    transform: scale(1.3);
  }
`;
export const Slideshow = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const SlideshowItem = styled.div`
  width: inherit;
  height: inherit;
  position: absolute;
  opacity: 0;
  animation: ${cycleImages} 31s infinite;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${zoom} 31s infinite;
  }
`;

export const SlideShowItemText = styled.div`
  max-width: 50%;
  position: absolute;
  top: 70%;
  left: 0;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 5rem 10rem 5rem 3rem;

  h5 {
    font-size: 5rem;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 3px;
    margin-bottom: 2.5rem;
  }
  
  p {
    font-size: 1.6rem;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1px;
    font-weight: 300;
  }
`;

import styled, { keyframes } from 'styled-components';

const slide = keyframes`
    0%{
        opacity: 0;
        transform: scale(1.1);
    }
    100%{
        opacity: 1;
        transform: scale(1);
    }
`;

export const Containerslide = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  display: none;
  padding: 0 15px;
  animation: ${slide} 2s ease;

  &&.active {
    display: flex;
  }
`;


export const Container = styled.div`
  max-width: 1170px;
  margin: auto;
  flex-grow: 1;
`;

export const Caption = styled.div`
  width: 50%;

  h1 {
    font-size: 42px;
    color: #000;
    margin: 0;
  }
  p {
    font-size: 18px;
    margin: 15px 0 30px;
    color: #fff;
    font-weight: bold;
  }
  a {
    display: inline-block;
    padding: 10px 30px;
    background-color: #000;
    color: #fff;
    text-decoration: none;
  }
`;

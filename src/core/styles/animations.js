import { keyframes } from 'styled-components';

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const zoomIn = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.9, 0.9, 0.9);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const pulse = keyframes`
  0% {
    transform: none;
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    transform: none;
  }
`;

export const fadeAndPulse = keyframes`
  0% {
    opacity: 0;
    transform: none;
  }

  50% {
    opacity: 0.5;
    transform: scale3d(1.05, 1.05, 1.05);
  }

  100% {
    opacity: 1;
    transform: none;
  }
`;

export const slideInUp = keyframes`
  from {
    transform: translate3d(0, 15px, 0);
  }

  to {
    transform: none;
  }
`;

export const fadeAndSlideInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 15px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

export const slideInDown = keyframes`
  from {
    transform: translate3d(0, -15px, 0);
  }

  to {
    transform: none;
  }
`;

export const fadeAndSlideInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -15px, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

import { transparentize } from 'polished';
import { rotate } from '../../core/styles/animations';
import { DARK, LIGHT } from '../../core/styles/themes';

const LOADING_BACKGROUND_IMAGES = {
  [DARK]:
    'PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMjQyODMzIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIvPjwvZz48L3N2Zz4=',
  [LIGHT]:
    'PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjZmZmZmZmIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBzdHJva2Utb3BhY2l0eT0iLjUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCIvPjwvZz48L3N2Zz4=',
};

export const loading = (size, color = DARK) => `
  display: inline-block;
  width: ${size};
  height: ${size};
  background: url('data:image/svg+xml;base64,${LOADING_BACKGROUND_IMAGES[color]}') no-repeat center;
  background-size: ${size};
  animation: ${rotate} 0.4s linear infinite;
`;

export const loadingOverlay = (size, backgroundColor = '#fff', transparency = 0.05, zIndex = 1000) => `
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${zIndex};
    background: ${transparentize(transparency, backgroundColor)};
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: ${zIndex};
    margin: -13px 0 0 -13px;
    ${loading(size)};
  }
`;

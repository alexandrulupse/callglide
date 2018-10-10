const retinaImage = (fileName, retinaFileName, backgroundSize) => `
background-image: url(${fileName});
background-size: ${backgroundSize};

@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
  only screen and (min--moz-device-pixel-ratio: 1.3),
  only screen and (-o-min-device-pixel-ratio: 1.3 / 1),
  only screen and (min-resolution: 125dpi),
  only screen and (min-resolution: 1.3dppx) {
  background-image: url(${retinaFileName});
}
`;

export default retinaImage;

const readFileAsDataUrl = file =>
  new Promise(resolve => {
    const fileReader = new FileReader();

    fileReader.addEventListener('load', () => {
      resolve(fileReader.result);
    });

    fileReader.readAsDataURL(file);
  });

export default readFileAsDataUrl;


function putImg() {
    const imgElement = document.getElementsByTagName('img')[0];

    const randomNumber = Math.ceil(Math.random() * 10);

    if (imgElement) {

      const imgPath = `./img/${randomNumber}.jpg`;

      imgElement.src = imgPath;
  }
}
putImg()
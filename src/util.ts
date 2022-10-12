export function loadImg(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    function tryImage() {
      if (img.complete) {
        resolve(img);
      } else {
        reject(img);
      }
    }
    var img = new Image();
    img.onload = () => tryImage();
    img.onerror = () => reject(img);
    img.src = src;
  });
}

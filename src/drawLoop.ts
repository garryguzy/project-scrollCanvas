// 序列帧渲染

import { loadImg } from './util';
import url0 from './resources/00000.png';
import url1 from './resources/00001.png';
import url2 from './resources/00002.png';
import url3 from './resources/00003.png';
import url4 from './resources/00004.png';
import url5 from './resources/00005.png';
import url6 from './resources/00006.png';
import url7 from './resources/00007.png';
import url8 from './resources/00008.png';
import url9 from './resources/00009.png';
import url10 from './resources/00010.png';
import url11 from './resources/00011.png';
import url12 from './resources/00012.png';
import url13 from './resources/00013.png';
import url14 from './resources/00014.png';
import url15 from './resources/00015.png';
import url16 from './resources/00016.png';
import url17 from './resources/00017.png';
import url18 from './resources/00018.png';
import url19 from './resources/00019.png';

// @ts-ignore
import ScrollMagic from 'scrollmagic';

export const preloadCanvasImage = async (srcList: string[]) => {
  const images: HTMLImageElement[] = [];
  for (let i of srcList) {
    const img = await loadImg(i);
    images.push(img);
  }

  return images;
};

export const drawCanvasImage = async ({ canvas, img }: DragImageOpts) => {
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const width = canvas.scrollWidth;
    const height = canvas.scrollHeight;
    ctx.clearRect(0, 0, width * 2, height * 2);

    ctx.drawImage(img, 0, 0, width * 2, height * 2);
  }
};

export const playIndex = () => {};

export const drawCanvas = ({
  container,
  width = container.scrollWidth,
  height = container.scrollHeight,
}: DrawCanvasOpts) => {
  const canvasId = 'scrollCanvas';
  container.innerHTML =
    '<canvas id="' +
    canvasId +
    '" width="' +
    width * 2 +
    '" height="' +
    height * 2 +
    '" style="pointer-events:none;width:' +
    width +
    'px;height:' +
    height +
    'px;"></canvas>';
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement;
  return canvas;
};

export const initScrollMagic = async ({
  container,
  startPos = 0,
  endPos = 500,
}: ScrollOpts) => {
  const controller = new ScrollMagic.Controller();

  const canvas = drawCanvas({
    container,
  });
  const srcList = [
    // '//qty83k.creatby.com/materials/77/origin/1a5f87f26783881e5920920d392d877c_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/77eb987ceacd99f2a76a4a35474628dd_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/244e8c90f93994fd13261bee5b5501c1_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/26a0d2630dd59de06a0869906efcdf5b_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/ba28d35dcd12896cdb5b1ae4a794ba49_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/ad126441da017e3a3154e5d26ad4a7df_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/72f6b71ffae6f89f2452ca132d7c473b_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/d3687bf3d8409d37770052580ab1eed9_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/e78bbb92acbfe6abb23353fd885fda8f_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/75c25a9dbcc483b02230fd8841c46373_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/9314e0cdfaeaf69a978016b9b7e26884_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/4c72f9b3a2b3426a07061c5cd6296612_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/90b0b1b39b2dbfec1077d6630ec2baf5_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/23550aa355a8e001ab7c79719d5501bd_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/0b7fa1976724fe6a93d9de0b9f4f0863_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/a2e8da854b5dc1b26376911dd1cb7aa5_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/3a7981a5254b3d4fcca03b74e64bc23d_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/5f8da3579f3e246a203564f1b8f4f823_origin.png',
    // '//qty83k.creatby.com/materials/77/origin/9c924b752cc6938f1de38d48d9ebcf7f_origin.png',
    url0,
    url1,
    url2,
    url3,
    url4,
    url5,
    url6,
    url7,
    url8,
    url9,
    url10,
    url11,
    url12,
    url13,
    url14,
    url15,
    url16,
    url17,
    url18,
    url19,
  ];

  let current = 0;

  const images = await preloadCanvasImage(srcList);

  drawCanvasImage({
    canvas,
    img: images[current],
  });
  var containerScene = new ScrollMagic.Scene({
    duration: 5000,
  }).addTo(controller);
  containerScene.on('update', function (event: any) {
    console.log('Scene updated.', event);
    const pos = event.scrollPos;
    const index = getScrollDrawIndex({
      total: srcList.length,
      startPos,
      endPos,
      pos,
      current,
    });

    if (index !== current) {
      drawCanvasImage({
        canvas,
        img: images[index],
      });
      current = index;
      console.log('index', index);
    }
  });
};

export const getScrollDrawIndex = ({
  total,
  startPos,
  endPos,
  pos,
  current,
}: ScrollDrawIndexOpts) => {
  if (pos <= endPos && pos >= startPos) {
    const index = Math.round(((total - 1) / (endPos - startPos)) * pos);
    return index;
  }
  return current;
};

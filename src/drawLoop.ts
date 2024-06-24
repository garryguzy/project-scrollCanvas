// 序列帧渲染

import { loadImg } from './util';
import { nanoid } from 'nanoid'


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

/**
 *  具体播放哪一帧
 */
export const playIndex = () => {};

export const drawCanvas = ({
  container,
  width = $(container).width() || 0,
  height = $(container).height() || 0,
}: DrawCanvasOpts) => {
  const canvasId = 'scrollCanvas'+nanoid(8);
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

/**
 * 在 container 容器中进行一个scroll 动画的初始化
 * @param param0 
 */
export const initScrollMagic = async ({
  container,
  startPos = 0,
  endPos = 500,
  width,
  height,
  imgs
}: ScrollOpts) => {
  const controller = new ScrollMagic.Controller();

  const canvas = drawCanvas({
    container,
    width,
    height
  });
  const srcList = imgs || [
  ];

  let current = 0;
  const [first] = srcList;
  const [firstImage] = await preloadCanvasImage([first]);
  drawCanvasImage({
    canvas,
    img: firstImage,
  });

  const images = await preloadCanvasImage(srcList);


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
  $(window).on('resize', function(){
    canvas.width = ($(container).width() || 0)   * 2;
    canvas.height = ($(container).height() || 0) * 2;
    $(canvas).css({
      width: ($(container).width() || 0),
      height: ($(container).height() || 0)
    })
    drawCanvasImage({
      canvas,
      img: images[current],
    });
  } )
};

export const getScrollDrawIndex = ({
  total,
  startPos,
  endPos,
  pos,
  current,
}: ScrollDrawIndexOpts) => {
  if (pos <= endPos && pos >= startPos) {
    const index = Math.round(((total - 1) / (endPos - startPos)) * (pos-startPos));
    return index;
  }
  if(pos > endPos) return total - 1;
  if(pos < startPos) return 0;
  return current;
};

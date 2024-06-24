/// <reference types="vite/client" />

interface DrawCanvasOpts {
  container: HTMLElement;
  width?: number;
  height?: number;
}

interface DragImageOpts {
  canvas: HTMLCanvasElement;
  img: HTMLImageElement;
}

interface ScrollDrawIndexOpts {
  startPos: number;
  endPos: number;
  pos: number;
  total: number;
  current: number;
}

interface ScrollOpts {
  container: HTMLElement;
  startPos: number;
  endPos: number;
  width?: number ;
  height?: number ;
  imgs? : string[];
}

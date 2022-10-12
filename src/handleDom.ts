// Everything about dom moving ;

export const getDom = (
  dom: string | HTMLElement,
  parent: any = 'body'
): JQuery<HTMLElement> => {
  if (typeof dom === 'string') {
    return $(parent).find(dom);
  } else {
    return $(dom);
  }
};

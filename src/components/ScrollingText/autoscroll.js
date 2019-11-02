/**
 * Programmatically smoothly scrolls content to its bottom
 * @name autoScroll
 * @param {Object} section - the React ref of the section containing the text container
 * @param {*} textfullHeight - the full height of the text, as measured by the height of text container 
 */
export default (section, textfullHeight) => {
  const sectionHeight = section.offsetHeight;

  let toBottom, toTop;

  toBottom = setInterval(() => {
    let currentPos = section.scrollTop;
    if(currentPos < (textfullHeight - sectionHeight)) {
      section.scrollTop = currentPos + 1;
      currentPos = section.scrollTop;
    } else {
      clearInterval(toBottom);
      toBottom = undefined; // ensure interval is cleared

      // TODO: Is there way to put in a pause without nesting?
      setTimeout(() => {
        toTop = setInterval(() => {
          if(currentPos > 0) {
            section.scrollTop = currentPos - 10;
            currentPos = section.scrollTop;
          } else {
            clearInterval(toTop);
            toTop = undefined; // ensure interval is cleared
          }
        }, 10);
      }, 2400);
    }
  }, 50);
};
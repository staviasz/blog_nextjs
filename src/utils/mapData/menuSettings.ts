export const mapMenuSettings = (menuData = []) => {
  return menuData.map((item) => {
    const { id = '', link = '', newTab = false, text = '' } = item;
    return {
      id,
      link,
      newTab,
      text,
    };
  });
};

export const mapMenuSettings = (menuData = []) => {
  return menuData.map((item) => {
    const {id = '', link = '', newTab = '', text = ''} = item
    return {
      id,
      link,
      newTab,
      text
    }
  })
}

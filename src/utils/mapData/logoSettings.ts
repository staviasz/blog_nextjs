export const mapLogoSettings = (logoData: any) => {
  const { data } = logoData
  const {id = '', attributes: {altText = '', url = ''} = ''} = data[0]
  return { id, altText, url }
}

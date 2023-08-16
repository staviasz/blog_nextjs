import { mapLogoSettings } from './logoSettings'
import { mapMenuSettings } from './menuSettings'


export const mapSettings = (settings: any) => {
  const { data } = settings
  const {id ='', attributes: {blogName = '', blogDescription ='', logo = '', menuLink = [], footerText = '' } = ''} = data
  return {
    id,
    blogName,
    blogDescription,
    logo: mapLogoSettings(logo),
    menuLink: mapMenuSettings(menuLink),
    footerText
  }
}

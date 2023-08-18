/* eslint-disable @typescript-eslint/no-explicit-any */
import { mapLogoSettings } from './logoSettings';
import { mapMenuSettings } from './menuSettings';

export const mapSettings = (settings: any) => {
  const { data } = settings;
  const {
    id = '',
    attributes: {
      blogName = '',
      blogDescription = '',
      logo = '',
      menuLink = [],
      footerText = '',
    } = '',
  } = data;
  return {
    id,
    blogName,
    blogDescription,
    cover: mapLogoSettings(logo),
    menuLink: mapMenuSettings(menuLink),
    footerText,
  };
};

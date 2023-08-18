import { BaseTemplateProps } from '.';
import json from '../../api/data.json';
import { mapSettings } from '../../utils/mapData/mapSettings';

const { data } = json;
export const mock = {
  settings: mapSettings(data.setting),
  children: 'Olá mundo',
} as BaseTemplateProps;

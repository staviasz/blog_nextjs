/* eslint-disable @typescript-eslint/no-explicit-any */
interface coverDataProps {
  id: string;
  altText: string;
  url: string;
}

export const coverClean = (coverData: any): coverDataProps => {
  const {
    id = '',
    attributes: { altText = '', url = '' },
  } = coverData.data;
  return { id, altText, url };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
interface coverDataProps {
  id: string;
  altText: string;
  url: string;
}

const coverClean = (coverData: any): coverDataProps | null => {
  const { data } = coverData;
  if (data) {
    const {
      id = '',
      attributes: { altText = '', url = '' },
    } = data;
    return { id, altText, url };
  }
  return null;
};

export default coverClean;

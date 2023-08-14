/* eslint-disable @typescript-eslint/no-explicit-any */
interface coverDataProps {
  id: string;
  altText: string;
  url: string;
}

const coverClean = (coverData: any): coverDataProps | undefined => {
  if (coverData.data) {
    const {
      id = '',
      attributes: { altText = '', url = '' },
    } = coverData.data;
    return { id, altText, url };
  }
};

export default coverClean;

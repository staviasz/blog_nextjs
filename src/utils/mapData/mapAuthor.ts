/* eslint-disable @typescript-eslint/no-explicit-any */
interface authorDataProps {
  displayName: string;
  slug: string;
}

const authorClean = (authorData: any): authorDataProps | undefined => {
  const { data } = authorData;
  if (data !== null) {
    const {
      attributes: { displayName, slug },
    } = data;
    return { displayName, slug };
  }
};

export default authorClean;

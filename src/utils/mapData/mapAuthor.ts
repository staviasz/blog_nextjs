/* eslint-disable @typescript-eslint/no-explicit-any */
interface authorDataProps {
  displayName: string;
  slug: string;
}

const authorClean = (authorData: any): authorDataProps | null => {
  const { data } = authorData;
  if (data === null) return null;
  const {
    attributes: { displayName, slug },
  } = data;
  return { displayName, slug };
};

export default authorClean;

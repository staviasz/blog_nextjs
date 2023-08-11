/* eslint-disable @typescript-eslint/no-explicit-any */
interface coverDataProps {
  displayName: string;
  slug: string;
}

export const categoriesClean = (categoriesData: any[]): coverDataProps[] => {
  return categoriesData.map((item) => {
    const {
      attributes: { displayName, slug },
    } = item;
    return {
      displayName,
      slug,
    };
  });
};

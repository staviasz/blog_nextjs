/* eslint-disable @typescript-eslint/no-explicit-any */
interface categoriesDataProps {
  displayName: string;
  slug: string;
}

const categoriesClean = (categoriesData: any): categoriesDataProps[] => {
  const { data } = categoriesData;
  return data.map((item: any) => {
    const {
      attributes: { displayName, slug },
    } = item;
    return {
      displayName,
      slug,
    };
  });
};

export default categoriesClean;

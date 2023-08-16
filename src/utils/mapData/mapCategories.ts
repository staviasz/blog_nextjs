/* eslint-disable @typescript-eslint/no-explicit-any */
interface categoriesDataProps {
  displayName: string;
  slug: string;
}

const categoriesClean = (
  categoriesData: any,
): categoriesDataProps[] | undefined => {
  const { data } = categoriesData;
  if (data !== null) {
    return data.map((item: any) => {
      const {
        attributes: { displayName, slug },
      } = item;
      return {
        displayName,
        slug,
      };
    });
  }
};

export default categoriesClean;

/* eslint-disable @typescript-eslint/no-explicit-any */
interface tagsDataProps {
  displayName: string;
  slug: string;
}

const tagsClean = (tagsData: any): tagsDataProps[] => {
  const { data } = tagsData;
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

export default tagsClean;

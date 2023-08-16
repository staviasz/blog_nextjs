/* eslint-disable @typescript-eslint/no-explicit-any */
interface tagsDataProps {
  displayName: string;
  slug: string;
}

const tagsClean = (tagsData: any): tagsDataProps[] | undefined => {
  const { data } = tagsData;
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

export default tagsClean;

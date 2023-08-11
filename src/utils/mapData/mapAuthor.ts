interface authorDataProps {
  data: {
    attributes: { displayName: string; slug: string };
  };
}

export const authorClean = (authorData: authorDataProps) => {
  const {
    attributes: { displayName, slug },
  } = authorData.data;
  return { displayName, slug };
};

interface authorDataProps {
  data: {
    attributes: { displayName: string; slug: string };
  };
}

const authorClean = (authorData: authorDataProps) => {
  const {
    attributes: { displayName, slug },
  } = authorData.data;
  return { displayName, slug };
};

export default authorClean;

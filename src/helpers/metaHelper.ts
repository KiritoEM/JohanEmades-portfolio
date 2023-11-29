interface ImetaTitle {
  homeTitle: string;
}

export default function metaHelper() {
  const metaTitle: ImetaTitle = {
    homeTitle: "Welcome to my Portfolio",
  };

  return {
    metaTitle,
  };
}

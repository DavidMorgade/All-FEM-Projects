const determineBgImage = (desktop, tablet, mobile, size) => {
  const bgImage =
    size >= 0 && size <= 768
      ? mobile
      : size >= 768 && size < 1440
      ? tablet
      : desktop;
  return bgImage;
};

export default determineBgImage;

const testDate = "2021-10-13T21:27:52Z";

const transformDate = (date) => {
  const newDate = new Date(date);
  const convertedMonth = newDate.toLocaleString("en-US", {
    month: "long",
  });
  const convertedDay = newDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const convertedYear = newDate.toLocaleString("en-US", {
    year: "numeric",
  });
  const finalDate = `Joined ${convertedDay} ${convertedMonth.slice(
    0,
    3
  )} ${convertedYear}`;
  return finalDate;
};

export default transformDate;

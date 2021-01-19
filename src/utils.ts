export const sortArrayOfObjects = <T>(
  data: T[],
  property: string,
  reverseOrder = false
) => {
  const sortedData = [...data];
  const compare = (a: { [key: string]: any }, b: { [key: string]: any }) => {
    let comparison = 0;
    if (a[property] < b[property]) comparison = -1;
    if (a[property] > b[property]) comparison = 1;
    return reverseOrder ? comparison * -1 : comparison;
  };
  sortedData.sort(compare);
  return sortedData;
};

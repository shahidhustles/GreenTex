import { useTextiles } from "../store/store";

export const allProperties = () => {
  const textiles = useTextiles.getState().getTextiles();
  const mergedArr = [];
  textiles.forEach((textile) => {
    mergedArr.push(...textile.properties);
  });
  // set keep the tab of all the unique elements of the arr, and we are spreading that into a new arr.
  const uniqueArr = [...new Set(mergedArr)];
  //for sorting  alphabetically (a - b will sort the array into small string first and big at last)
  const sortedArr = uniqueArr.sort((a, b) => a.localeCompare(b));
  return sortedArr;
};

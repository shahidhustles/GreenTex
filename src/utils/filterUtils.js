import { useTextiles } from "../store/store";

export const allProperties = () => {
  const textiles = useTextiles.getState().getTextiles();
  const selectedProperties = useTextiles.getState().selectedProperties || [];

  let mergedArr = [];
  textiles.forEach((textile) => {
    mergedArr.push(...textile.properties);
  });

  const uniqueArr = [...new Set(mergedArr)];
  const sortedArr = uniqueArr.sort((a, b) => a.localeCompare(b));

  // Filter out selected properties first to avoid duplicates
  const remainingProps = sortedArr.filter(
    (prop) => !selectedProperties.includes(prop)
  );

  // Combine selected properties with remaining properties
  return [...selectedProperties, ...remainingProps];
};

export const filterCards = () => {
  const selectedProperties = useTextiles.getState().selectedProperties;
  const textiles = useTextiles.getState().getTextiles();
  
  if (!selectedProperties.length) return textiles;
  
  return textiles.filter((textile) =>
    selectedProperties.every((prop) =>
      textile.properties.includes(prop)
    )
  );
};

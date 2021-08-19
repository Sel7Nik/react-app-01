export const updateObjectInArray = (
  items,
  itemId,
  objPropName,
  neewObjProps
) => {
  return items.map((unit) => {
    if (unit[objPropName] === itemId) {
      return { ...unit, ...neewObjProps };
    }
    return unit;
  });
};

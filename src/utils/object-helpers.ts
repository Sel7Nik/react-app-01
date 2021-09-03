export const updateObjectInArray = (
  items: any,
  itemId: any,
  objPropName: any,
  neewObjProps: any
) => {
  return items.map((unit: any) => {
    if (unit[objPropName] === itemId) {
      return { ...unit, ...neewObjProps };
    }
    return unit;
  });
};

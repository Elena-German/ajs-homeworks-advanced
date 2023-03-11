export default function orderByProps(obj, sortOrder) {
  const arrPropertySortedList = [];
  const arrPropertyList = Object.keys(obj);

  sortOrder.forEach((item) => {
    for (const prop in obj) {
      if (prop === item) {
        arrPropertySortedList.push({ key: prop, value: obj[prop] });
        arrPropertyList.splice(arrPropertyList.indexOf(item), 1);
      }
    }
  });
  arrPropertyList.sort();
  arrPropertyList.forEach((item) => {
    arrPropertySortedList.push({ key: item, value: obj[item] });
  });

  return arrPropertySortedList;
}

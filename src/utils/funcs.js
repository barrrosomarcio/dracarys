export const SortByName = (array) => {
  return array.sort((a, b) => {
    let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
  })
}
// Find an item by ID in an array
const findItemById = <T extends { id: number | string }>(
  array: T[],
  id: number | string
): T | undefined => {
  return array.find((item) => item.id === id);
};

// Handle GET requests
const getData = <T extends { id: number | string }>(data: T[]) => {
  return [...data];
};

// Handle GET requests for a specific item by ID
const getItemById = <T extends { id: number | string }>(
  data: T[],
  itemId: number | string
) => {
  return findItemById(data, itemId);
};

// Handle POST (Add new) requests
const addItem = <T extends { id: number | string }>(
  data: T[],
  newItem: T
): T => {
  const itemWithNewId = { ...newItem };

  data.push(itemWithNewId);

  return itemWithNewId;
};

// Handle PUT (Update) requests
const updateItem = <T extends { id: number | string }>(
  data: T[],
  updatedItem: T
): T | undefined => {
  const index = data.findIndex((item) => item.id === updatedItem.id);
  if (index !== -1) {
    data[index] = updatedItem;
    return updatedItem;
  }
  return undefined; // Item not found
};

// Handle DELETE requests
const deleteItem = <T extends { id: number | string }>(
  data: T[],
  itemId: number
): T | undefined => {
  const index = data.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const deletedItem = data.splice(index, 1)[0];
    return deletedItem;
  }
  return undefined;
};

export { getData, getItemById, addItem, updateItem, deleteItem };

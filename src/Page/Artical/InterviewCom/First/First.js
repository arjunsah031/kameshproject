import React, { useState } from 'react';

const ListComponent = () => {
  const initialList = ["Item 1", "Item 2", "Item 3"];
  const [list, setList] = useState(initialList);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (index) => {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter(item => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  };

  const handleDelete = () => {
    const newList = list.filter((_, index) => !checkedItems.includes(index));
    setList(newList);
    setCheckedItems([]);
  };

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkedItems.includes(index)}
            onChange={() => handleCheckboxChange(index)}
          />
          {item}
        </div>
      ))}
      {checkedItems.length > 0 && (
        <button onClick={handleDelete}>Delete</button>
      )}
    </div>
  );
};

export default ListComponent;

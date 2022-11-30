import React, { useState } from "react";

const content = [
  {
    tab: "Section1",
    content: "I'm the content of the Section1",
  },
  {
    tab: "Section2",
    content: "I'm the content of the Section2",
  },
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    chageItem: setCurrentIndex,
  };
};

const Tabs = () => {
  const { currentItem, chageItem } = useTab(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button
          onClick={() => {
            chageItem(index);
          }}
        >
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default Tabs;

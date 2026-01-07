import { useState } from "react";
import style from "./TabContainer.module.css";
import { TabData } from "./TabData";

const TabContainer = () => {
  const [selectedTab, setSelectedTab] = useState(TabData[0]);

  const handleSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className={style.container}>
      {TabData.map((tab) => {
        return (
          <button
            onClick={() => handleSelect(tab)}
            key={tab.id}
            className={`${style.tabButtons} ${
              tab.id === selectedTab.id ? style.active : ""
            }`}
          >
            {tab.name}
          </button>
        );
      })}
      <div className={style.selectedTab}>
        <h2>{selectedTab.title}</h2>
        <p>{selectedTab.description}</p>
      </div>
    </div>
  );
};

export default TabContainer;

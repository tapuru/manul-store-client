import React from "react";
import cl from "./Tabs.module.css";


interface Tab {
  label: string;
  index: number;
}
interface TabsProps {
  tabs: Tab[];
  handleChange: (index: number) => void;
  activeTab: number;
  children?: React.ReactNode;
}

export const Tabs = ({ tabs, handleChange, activeTab, children }: TabsProps) => {

  return (
    <div  className={cl.wrapper}>
      <div className={cl.tabs}>
        {tabs?.map(tab => (
          <div 
            className={`${cl.tab} ${tab.index === activeTab ? cl.activeTab : ""}`} 
            key={tab.index}
            onClick={() => handleChange(tab.index)}
          >
            {tab.label}
          </div> 
        ))}
      </div>
      <div className={cl.contentTabs}>
        {children}
      </div>
    </div>
  )
}

interface TabContentProps {
  children?: React.ReactNode;
  activeTab: number;
  index: number;
}

Tabs.TabContent = ({ children, activeTab, index }: TabContentProps) => {
  return (
    <div className={`${cl.content} ${index === activeTab ? cl.activeContent : ""}`}>
      {children}
    </div>
  )
}

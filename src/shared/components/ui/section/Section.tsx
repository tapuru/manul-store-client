import React from 'react';
import cl from "./Section.module.css";
import { AppText } from '..';

interface SectionProps {
  children?: React.ReactNode;
}

export const Section = ({ children }: SectionProps) => {
  return (
    <section className={cl.section}>
      {children}
    </section>
  )
}

interface SectionItemProps {
  children?: React.ReactNode;
  actions?: React.ReactNode;
  title?: string;
}

Section.Item = ({ children, title, actions }: SectionItemProps) => {

  if (title || actions) {
    return (
      <div className={`${cl.sectionItem} ${cl._flex}`}>
        <div className={cl.sectionItemHeader} >
          <AppText variant='h2'>
            {title}
          </AppText>
          <div>
            {actions}
          </div>
        </div>
        <div className={cl.sectionItemContent} >
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className={cl.sectionItem}>
      {children}
    </div>
  )
}

import React from 'react';
import cl from "./Layout.module.css";
import { Footer } from '../../wigets/footer';
import { Header } from '../../wigets/header';

interface LayoutProps {
  header?: React.ReactNode;
  sidebar?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

export const Layout = ({ children, footer = <Footer />, header = <Header />, sidebar }: LayoutProps) => {
  return (
    <div className={cl.wrapper}>
      <header className={cl.header} >{header}</header>
      <div className={cl.pageContent}>
        {sidebar ? (
          <div className={cl.contentGrid}>
            <aside>
              {sidebar}
            </aside>
            <main>
              {children}
            </main>
          </div>
        ) : (
          <main>
            {children}
          </main>
        )}
      </div>
      <footer className={cl.footer} >{footer}</footer>
    </div>
  )
}

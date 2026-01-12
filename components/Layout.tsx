
import React from 'react';
import { ViewType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeView: ViewType;
  setView: (view: ViewType) => void;
  orderCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, activeView, setView, orderCount }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark px-6 py-3 shadow-sm lg:px-10">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white cursor-pointer" onClick={() => setView('catalog')}>
            <div className="size-8 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined !text-3xl">hexagon</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Bronze Parts Catalog</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <button 
              onClick={() => setView('catalog')}
              className={`${activeView === 'catalog' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            >
              Catalog
            </button>
            <button 
              onClick={() => setView('order-list')}
              className={`${activeView === 'order-list' ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-400'} text-sm font-medium leading-normal hover:text-primary transition-colors`}
            >
              My Order List
            </button>
          </nav>
        </div>
        
        <div className="flex flex-1 justify-end gap-4 md:gap-8">
          <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100 dark:bg-slate-800">
              <div className="text-slate-500 dark:text-slate-400 flex border-none items-center justify-center pl-4 rounded-l-lg">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-slate-500 dark:placeholder:text-slate-400 px-4 rounded-l-none pl-2 text-sm font-normal" 
                placeholder="Search SKU..." 
              />
            </div>
          </label>
          <button 
            onClick={() => setView('order-list')}
            className="flex items-center justify-center rounded-lg h-10 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors gap-2 text-sm font-bold px-3 min-w-0 relative"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="hidden sm:inline">Order List</span>
            {orderCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                {orderCount}
              </span>
            )}
          </button>
        </div>
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
        <p>© 2024 Bronze Parts Catalog Pro - Industrial Precision Solutions</p>
      </footer>
    </div>
  );
};

export default Layout;


import React from 'react';
import { CATEGORIES } from '../constants';

interface SidebarProps {
  activeCategory: string;
  onCategoryChange: (id: string) => void;
  selectedDiameters: string[];
  onDiameterToggle: (diameter: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  activeCategory, 
  onCategoryChange, 
  selectedDiameters, 
  onDiameterToggle 
}) => {
  const diameters = ['1/2" - 1"', '1 1/4" - 2"', '2" +'];

  return (
    <aside className="w-full lg:w-64 shrink-0 flex flex-col gap-6">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Categories</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">Refine by type</p>
          </div>
          <div className="flex flex-col gap-1">
            <div 
              onClick={() => onCategoryChange('all')}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeCategory === 'all' ? 'bg-primary/10 border-l-4 border-primary' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              <span className={`material-symbols-outlined text-[20px] ${activeCategory === 'all' ? 'text-primary' : 'text-slate-400'}`}>grid_view</span>
              <p className={`text-sm font-bold leading-normal ${activeCategory === 'all' ? 'text-primary' : 'text-slate-600 dark:text-slate-300'}`}>All Categories</p>
            </div>
            {CATEGORIES.map((cat) => (
              <div 
                key={cat.id}
                onClick={() => onCategoryChange(cat.id)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors group ${activeCategory === cat.id ? 'bg-primary/10 border-l-4 border-primary' : 'hover:bg-slate-100 dark:hover:bg-slate-800'}`}
              >
                <span className={`material-symbols-outlined text-[20px] ${activeCategory === cat.id ? 'text-primary' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'}`}>
                  {cat.icon}
                </span>
                <p className={`text-sm font-medium leading-normal ${activeCategory === cat.id ? 'text-primary' : 'text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                  {cat.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col">
            <h1 className="text-slate-900 dark:text-white text-base font-bold leading-normal">Diameter</h1>
          </div>
          <div className="flex flex-col gap-2">
            {diameters.map((d) => (
              <label key={d} className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={selectedDiameters.includes(d)}
                  onChange={() => onDiameterToggle(d)}
                  className="form-checkbox rounded border-slate-300 text-primary focus:ring-primary h-4 w-4"
                />
                <span className="text-slate-600 dark:text-slate-300 text-sm">{d}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

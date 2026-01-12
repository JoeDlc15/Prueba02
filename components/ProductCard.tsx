
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group flex flex-col gap-0 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300">
      <div className="relative w-full aspect-square bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-contain m-6 transition-transform duration-500 group-hover:scale-105" 
          style={{ backgroundImage: `url("${product.image}")` }}
        />
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="h-8 w-8 rounded-full bg-white dark:bg-slate-700 shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
            <span className="material-symbols-outlined !text-lg">favorite</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col p-4 gap-2">
        <div>
          <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-normal mt-1">
            {product.description}
          </p>
        </div>
        <div className="mt-2 pt-3 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <span className="text-xs font-bold px-2 py-1 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
            SKU: {product.sku}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="text-primary text-sm font-bold flex items-center gap-1 hover:underline decoration-2 underline-offset-4"
          >
            Configure <span className="material-symbols-outlined !text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

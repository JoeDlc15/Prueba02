
import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import AIChat from './components/AIChat';
import { Product, ViewType } from './types';
import { PRODUCTS } from './constants';

const App: React.FC = () => {
  const [activeView, setActiveView] = React.useState<ViewType>('catalog');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('all');
  const [selectedDiameters, setSelectedDiameters] = React.useState<string[]>([]);
  const [orderList, setOrderList] = React.useState<Product[]>([]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesDiameter = selectedDiameters.length === 0 || (p.diameter && selectedDiameters.includes(p.diameter));
    return matchesSearch && matchesCategory && matchesDiameter;
  });

  const port = process.env.PORT || 3000;
  App.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });

  const handleAddToCart = (product: Product) => {
    setOrderList(prev => [...prev, product]);
    alert(`${product.name} added to order list.`);
  };

  const handleDiameterToggle = (d: string) => {
    setSelectedDiameters(prev => 
      prev.includes(d) ? prev.filter(item => item !== d) : [...prev, d]
    );
  };

  const removeFromOrder = (idx: number) => {
    setOrderList(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <Layout 
      activeView={activeView} 
      setView={setActiveView} 
      orderCount={orderList.length}
    >
      {activeView === 'catalog' ? (
        <>
          <Hero onSearch={setSearchTerm} />
          
          <div className="flex flex-col lg:flex-row max-w-[1440px] w-full mx-auto px-4 lg:px-10 py-8 gap-8">
            <Sidebar 
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              selectedDiameters={selectedDiameters}
              onDiameterToggle={handleDiameterToggle}
            />
            
            <main className="flex-1 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <button onClick={() => setActiveView('catalog')} className="text-slate-500 hover:text-primary transition-colors font-medium">Home</button>
                <span className="text-slate-400 material-symbols-outlined !text-base">chevron_right</span>
                <span className="text-slate-900 dark:text-white font-bold">Catalog</span>
                {activeCategory !== 'all' && (
                  <>
                    <span className="text-slate-400 material-symbols-outlined !text-base">chevron_right</span>
                    <span className="text-slate-900 dark:text-white font-bold capitalize">{activeCategory}</span>
                  </>
                )}
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="py-20 text-center flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined !text-6xl text-slate-300">search_off</span>
                  <p className="text-slate-500 font-medium">No products found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setActiveCategory('all'); setSelectedDiameters([]);}}
                    className="text-primary font-bold hover:underline"
                  >
                    Clear all filters
                  </button>
                </div>
              )}

              <div className="flex items-center justify-center pt-6">
                <div className="flex gap-2">
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold shadow-md shadow-primary/20">1</button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400">2</button>
                  <button className="h-10 w-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </main>
          </div>
        </>
      ) : (
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-black mb-8">My Order List</h1>
          {orderList.length > 0 ? (
            <div className="flex flex-col gap-4">
              <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <table className="w-full text-left">
                  <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
                    <tr>
                      <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Product</th>
                      <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">SKU</th>
                      <th className="px-6 py-4 text-sm font-bold text-slate-600 dark:text-slate-400">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100 dark:border-slate-800 last:border-0 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="size-12 rounded object-cover bg-slate-100" />
                            <div>
                              <p className="font-bold text-slate-900 dark:text-white">{item.name}</p>
                              <p className="text-xs text-slate-500">{item.description}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm font-mono text-slate-500">{item.sku}</td>
                        <td className="px-6 py-4">
                          <button 
                            onClick={() => removeFromOrder(idx)}
                            className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition-colors"
                          >
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-between items-center mt-6 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div>
                  <p className="text-sm text-slate-500">Total Items</p>
                  <p className="text-2xl font-black text-primary">{orderList.length}</p>
                </div>
                <button 
                  onClick={() => alert('Order inquiry sent to sales team!')}
                  className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
                >
                  Send Inquiry Request
                </button>
              </div>
            </div>
          ) : (
            <div className="py-20 text-center flex flex-col items-center gap-6">
              <div className="size-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-300">
                <span className="material-symbols-outlined !text-4xl">shopping_cart</span>
              </div>
              <div>
                <p className="text-xl font-bold text-slate-900 dark:text-white">Your list is empty</p>
                <p className="text-slate-500 mt-1">Browse our catalog to add high-quality bronze parts to your order inquiry.</p>
              </div>
              <button 
                onClick={() => setActiveView('catalog')}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-primary/20"
              >
                Go to Catalog
              </button>
            </div>
          )}
        </div>
      )}
      <AIChat />
    </Layout>
  );
};

export default App;

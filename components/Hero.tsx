
import React from 'react';

interface HeroProps {
  onSearch: (term: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="w-full">
      <div className="@container">
        <div className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-start justify-center px-6 py-10 lg:px-40" 
             style={{
               backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGnxUzBvgi4Tp_SFinzbjicPXa89BCqPQum37t2s5zIRkcI7JpZOCuH4Wj8WUlJSmq41nQGiWowM6KCBpk3Dsw9fW3dTZfUQ0y2EymTRCqy-1OU0ED-gZesSxPBWa-vUf7s00xS3bfjB2UMLpjEGfq8IQTzqsKE_crRsflKotnQDsRR3dMUPreYaqfJ4Byn0eMgG-tlZtzBLvtQM91Ee-gYtVqA2Mivn4-yeJir65v4rNEZPubaROYQteJlvSGDL_qYgXFzqNEZg")'
             }}>
          <div className="flex flex-col gap-2 text-left max-w-2xl">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] lg:text-5xl">
              Premium Bronze Components
            </h1>
            <h2 className="text-slate-200 text-base font-normal leading-normal lg:text-lg">
              Browse our extensive catalog of high-quality bronze fittings, valves, and connectors for your industrial needs. Built for durability and precision.
            </h2>
          </div>
          <label className="flex flex-col min-w-40 h-12 w-full max-w-[580px] lg:h-14 mt-4">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-lg">
              <div className="text-slate-500 flex border border-r-0 border-slate-200 bg-white items-center justify-center pl-[15px] rounded-l-lg">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input 
                className="form-input flex w-full min-w-0 flex-1 overflow-hidden rounded-none text-slate-900 focus:outline-0 focus:ring-0 border-y border-slate-200 bg-white h-full placeholder:text-slate-500 px-2 text-sm lg:text-base" 
                placeholder="Search by part name or SKU..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <div className="flex items-center justify-center rounded-r-lg border-l-0 border border-slate-200 bg-white pr-[5px] pl-1 py-1">
                <button 
                  onClick={handleSearch}
                  className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-full px-5 bg-primary hover:bg-blue-600 transition-colors text-white text-sm font-bold tracking-[0.015em]"
                >
                  <span className="truncate">Search</span>
                </button>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Hero;

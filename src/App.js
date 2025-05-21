import React, { useState, useEffect, useRef } from 'react';
import WorkPoster from './components/WorkPoster';
import PoliticalPoster from './components/PoliticalPoster';
import StereotypesPoster from './components/StereotypesPoster';

function App() {
  const [selectedPoster, setSelectedPoster] = useState(0);
  const [previousPoster, setPreviousPoster] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Page load animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Handle poster transitions
  const handleChangePoster = (newPoster) => {
    if (selectedPoster === newPoster || isTransitioning) return;
    
    setIsTransitioning(true);
    setPreviousPoster(selectedPoster);
    
    // First fade out current poster
    setTimeout(() => {
      setSelectedPoster(newPoster);
      // Then fade in new poster after a short delay
      setTimeout(() => {
        setIsTransitioning(false);
        setPreviousPoster(null);
      }, 300);
    }, 300);
  };
  
  const backgroundStyles = [
    { 
      backgroundImage: "url('https://tbcdn.talentbrew.com/company/27326/28708/content/WINS%20Illustration.jpg')",
      backgroundColor: "rgba(79, 70, 229, 0.2)" // indigo tint
    },
    { 
      backgroundImage: "url('https://fortune.com/img-assets/wp-content/uploads/2019/09/POL1019.Women-in-Politics-List-2019.jpg')",
      backgroundColor: "rgba(225, 29, 72, 0.2)" // rose tint
    },
    { 
      backgroundImage: "url('https://www.letadlanaplatne.cz/wp-content/uploads/2022/08/We-Can-Do-It.jpg')",
      backgroundColor: "rgba(217, 119, 6, 0.2)" // amber tint
    }
  ];
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Loading overlay with improved styling */}
      <div 
        className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="text-6xl font-bold text-black animate-bounce mb-4">
          Droits des Femmes
        </div>
        <div className="text-3xl font-medium text-gray-800">
          en France
        </div>
      </div>
      
      {/* Background image with fade-in animation */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: backgroundStyles[selectedPoster].backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          opacity: isLoading ? 0 : 1,
          transform: isLoading ? 'scale(1.05)' : 'scale(1)'
        }}
      ></div>
      
      {/* Background overlay with transition */}
      <div 
        className="fixed inset-0 transition-all duration-700 ease-in-out" 
        style={{ 
          backgroundColor: backgroundStyles[selectedPoster].backgroundColor,
          backdropFilter: "blur(8px)",
          zIndex: -1,
          opacity: isLoading ? 0 : 1
        }}
      ></div>
      
      {/* Content with slide-up animation */}
      <div 
        className={`relative z-10 p-4 flex flex-col min-h-screen transition-all duration-700 transform ${isLoading ? 'translate-y-10 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <header className="text-center mb-8 p-4 bg-white bg-opacity-40 rounded-lg backdrop-blur-sm transition-all duration-500 ease-in-out transform">
          <h1 className="text-3xl font-bold text-indigo-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'évolution des droits accordés aux femmes de nationalité française du 20ème siècle jusqu'à nos jours</h1>
          <p className="text-gray-700 italic mt-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Projet EMC 2025</p>
        </header>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => handleChangePoster(0)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedPoster === 0 ? 'bg-indigo-600 text-white scale-105' : 'bg-white bg-opacity-60 text-indigo-600 border border-indigo-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            disabled={isTransitioning}
          >
            Les femmes au travail
          </button>
          <button 
            onClick={() => handleChangePoster(1)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedPoster === 1 ? 'bg-rose-600 text-white scale-105' : 'bg-white bg-opacity-60 text-rose-600 border border-rose-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            disabled={isTransitioning}
          >
            Les femmes dans la vie politique
          </button>
          <button 
            onClick={() => handleChangePoster(2)} 
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${selectedPoster === 2 ? 'bg-amber-600 text-white scale-105' : 'bg-white bg-opacity-60 text-amber-600 border border-amber-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
            disabled={isTransitioning}
          >
            Les femmes face aux stéréotypes
          </button>
        </div>
        
        <div className="flex justify-center flex-grow relative">
          {/* Outgoing poster with fade-out animation */}
          {previousPoster !== null && (
            <div className="absolute inset-0 flex justify-center transition-opacity duration-300 opacity-0">
              {previousPoster === 0 && <WorkPoster />}
              {previousPoster === 1 && <PoliticalPoster />}
              {previousPoster === 2 && <StereotypesPoster />}
            </div>
          )}
          
          {/* Current poster with transition */}
          <div className={`transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
            {selectedPoster === 0 && <WorkPoster />}
            {selectedPoster === 1 && <PoliticalPoster />}
            {selectedPoster === 2 && <StereotypesPoster />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
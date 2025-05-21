import React from 'react';

const PoliticalPoster = () => {
  return (
    <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl transform transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
      <div className="flex items-center mb-6">
        <div className="w-3 h-16 bg-rose-600 mr-4"></div>
        <h2 className="text-4xl font-bold text-rose-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes dans la vie politique</h2>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-rose-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le droit de vote</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-1">
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le 21 avril 1944, les femmes françaises obtiennent le droit de vote par une ordonnance du Gouvernement provisoire de la République française présidé par le général de Gaulle.</p>
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le 29 avril 1945, les Françaises votent pour la première fois lors des élections municipales.</p>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>La France est l'un des derniers pays d'Europe occidentale à accorder le droit de vote aux femmes.</p>
          </div>
          <div className="flex-1 bg-rose-100 bg-opacity-80 rounded-lg p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="text-center relative w-full">
              <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                <img 
                  src="https://i.imgur.com/zugPtvD.png" 
                  alt="Femmes votant pour la première fois en 1945" 
                  className="w-full object-cover transform transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="bg-rose-600 text-white py-1 px-3 rounded-full inline-block mt-2 font-bold">
                1944-1945
              </div>
              <p className="mt-2 text-sm text-rose-800 font-medium" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>De l'exclusion à la participation citoyenne</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-rose-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'IVG dans la Constitution</h3>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg mb-4 transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300 hover:scale-110" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1975</div>
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Loi Veil</p>
              <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Dépénalisation de l'interruption volontaire de grossesse (IVG) pour une période de 5 ans, grâce au combat de Simone Veil.</p>
            </div>
          </div>
        </div>
        <div className="bg-white bg-opacity-70 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-rose-700 text-white rounded-full flex items-center justify-center font-bold text-lg transition-transform duration-300 hover:scale-110" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>2023</div>
            </div>
            <div className="ml-4">
              <p className="font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Constitutionnalisation de l'IVG</p>
              <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>La France devient le premier pays au monde à inscrire explicitement le droit à l'avortement dans sa Constitution.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-rose-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Représentation politique</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:bg-opacity-80">
            <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1936</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Trois femmes sous-secrétaires d'État dans le gouvernement du Front populaire</p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:bg-opacity-80">
            <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>2000</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Loi sur la parité en politique</p>
          </div>
          <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center transition-all duration-300 hover:shadow-lg hover:bg-opacity-80">
            <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>39,5%</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Femmes à l'Assemblée nationale en 2022</p>
          </div>
        </div>
        
        <div className="mt-6 p-4 border-l-4 border-rose-600 bg-white bg-opacity-70 rounded-lg transition-all duration-300 hover:shadow-lg">
          <p className="italic" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>"Ma revendication en tant que femme c'est que ma différence soit prise en compte, que je ne sois pas contrainte de m'adapter au modèle masculin."</p>
          <p className="text-right font-bold text-rose-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>— Simone Veil</p>
        </div>
      </div>
    </div>
  );
};

export default PoliticalPoster;
import React from 'react';
import TimelineEvent from './TimelineEvent';

const WorkPoster = () => {
  return (
    <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl transform transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
      <div className="flex items-center mb-6">
        <div className="w-3 h-16 bg-indigo-600 mr-4"></div>
        <h2 className="text-4xl font-bold text-indigo-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes au travail</h2>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le plafond de verre</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg transform transition-all duration-300 hover:translate-y-1">
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le "plafond de verre" désigne l'ensemble des barrières invisibles qui limitent l'ascension des femmes aux postes à haute responsabilité au sein des organisations.</p>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Malgré des qualifications égales, les femmes se heurtent à des obstacles qui freinent leur progression professionnelle.</p>
          </div>
          <div className="flex-1 bg-indigo-100 bg-opacity-80 rounded-lg p-4 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            {/* Using the actual graph image instead of placeholder */}
            <div className="text-center">
              <img 
                src="https://i.imgur.com/ADfKNU6.png" 
                alt="Représentation des femmes aux postes de direction (1980-2020)" 
                className="max-w-full h-auto rounded shadow-md"
              />
              <p className="mt-2 text-sm text-indigo-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Représentation des femmes aux postes de direction (1980-2020)</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'indépendance financière</h3>
        <div className="bg-white bg-opacity-70 p-4 rounded-lg transition-all duration-300 hover:bg-opacity-80">
          <div className="space-y-3">
            <TimelineEvent 
              year="1907" 
              title="Libre disposition du salaire" 
              description="Les femmes obtiennent le droit de disposer librement de leur salaire." 
              color="bg-indigo-600" 
            />
            <TimelineEvent 
              year="1965" 
              title="Réforme des régimes matrimoniaux" 
              description="Les femmes peuvent ouvrir un compte bancaire et exercer une profession sans l'autorisation de leur mari." 
              color="bg-indigo-700" 
            />
            <TimelineEvent 
              year="1983" 
              title="Loi Roudy" 
              description="Établit l'égalité professionnelle entre les femmes et les hommes." 
              color="bg-indigo-800" 
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les écarts salariaux</h3>
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <div className="bg-white bg-opacity-70 p-6 rounded-lg border-l-4 border-red-600 transition-all duration-300 hover:shadow-lg">
              <p className="text-2xl font-bold text-red-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>30%</p>
              <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Différence moyenne de salaire entre hommes et femmes en 1917</p>
            </div>
            <div className="bg-white bg-opacity-70 p-6 rounded-lg border-l-4 border-amber-600 mt-4 transition-all duration-300 hover:shadow-lg">
              <p className="text-2xl font-bold text-amber-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>16,8%</p>
              <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Différence moyenne de salaire entre hommes et femmes en 2020</p>
            </div>
          </div>
          <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg transition-all duration-300 hover:bg-opacity-80">
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Malgré des avancées significatives, les inégalités salariales persistent.</p>
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>À compétences égales et postes équivalents, les femmes sont encore moins rémunérées que les hommes.</p>
            <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le principe "à travail égal, salaire égal" reste un combat d'actualité.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPoster;
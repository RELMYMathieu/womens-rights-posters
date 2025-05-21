import React from 'react';

const StereotypesPoster = () => {
  return (
    <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl transform transition-all duration-500 hover:shadow-2xl animate-fade-in-up">
      <div className="flex items-center mb-6">
        <div className="w-3 h-16 bg-amber-600 mr-4"></div>
        <h2 className="text-4xl font-bold text-amber-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes face aux stéréotypes</h2>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Du statut de mineure à citoyenne</h3>
        <div className="flex flex-col md:flex-row bg-white bg-opacity-70 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-amber-200">
            <h4 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1804 : Code Civil Napoléonien</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
              <li className="transition-transform duration-200 hover:translate-x-1">La femme mariée a le statut de "mineure"</li>
              <li className="transition-transform duration-200 hover:translate-x-1">"La femme doit obéissance à son mari" (Art. 213)</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Incapacité juridique et financière</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Le mari est "chef de famille"</li>
            </ul>
          </div>
          <div className="flex-1 p-6">
            <h4 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Aujourd'hui</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
              <li className="transition-transform duration-200 hover:translate-x-1">Pleine capacité juridique</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Égalité dans le couple consacrée par la loi</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Autonomie financière et administrative</li>
              <li className="transition-transform duration-200 hover:translate-x-1">Partage légal de l'autorité parentale</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>La lutte contre le patriarcat</h3>
        <div className="p-6 bg-white bg-opacity-70 rounded-lg mb-4 transition-all duration-300 hover:shadow-lg">
          <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Qu'est-ce que le patriarcat ?</h4>
          <p className="text-gray-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le patriarcat est un système social, politique et économique dans lequel les hommes détiennent le pouvoir primaire et où les femmes sont largement exclues de ce pouvoir. Il se caractérise par l'autorité institutionnalisée des hommes par rapport aux femmes.</p>
          
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex-1 bg-white bg-opacity-80 p-4 rounded border border-amber-200 transition-all duration-300 hover:shadow-md">
              <h5 className="font-bold text-amber-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Mouvements féministes</h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                <li>Mouvement de libération des femmes (MLF) dans les années 1970</li>
                <li>Manifestations pour l'égalité salariale</li>
                <li>Lutte contre les violences faites aux femmes</li>
              </ul>
            </div>
            <div className="flex-1 bg-white bg-opacity-80 p-4 rounded border border-amber-200 transition-all duration-300 hover:shadow-md">
              <h5 className="font-bold text-amber-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Évolutions législatives</h5>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
                <li>1970 : L'autorité paternelle devient l'autorité parentale</li>
                <li>1992 : Loi sur le harcèlement sexuel</li>
                <li>2010 : Loi sur les violences faites aux femmes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Éducation et représentation médiatique</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white bg-opacity-70 p-4 rounded-lg transition-all duration-300 hover:shadow-lg">
            <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Accès à l'éducation</h4>
            <div className="space-y-4">
              <div className="flex items-center group">
                <div className="w-16 h-1 bg-amber-600 mr-3 group-hover:w-20 transition-all duration-300"></div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1880</span> : Loi Camille Sée créant les lycées de jeunes filles</p>
              </div>
              <div className="flex items-center group">
                <div className="w-24 h-1 bg-amber-600 mr-3 group-hover:w-28 transition-all duration-300"></div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1924</span> : Programmes d'enseignement identiques aux garçons</p>
              </div>
              <div className="flex items-center group">
                <div className="w-32 h-1 bg-amber-600 mr-3 group-hover:w-36 transition-all duration-300"></div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1975</span> : Mixité obligatoire dans tous les établissements publics</p>
              </div>
              <div className="flex items-center group">
                <div className="w-40 h-1 bg-amber-600 mr-3 group-hover:w-44 transition-all duration-300"></div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">2013</span> : Conventions interministérielles pour l'égalité à l'école</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white bg-opacity-70 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
            <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Représentation dans les médias</h4>
            <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Evolution de l'image des femmes dans les médias français :</p>
            <div className="space-y-2">
              <div className="flex group">
                <div className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3 transition-transform duration-200 group-hover:scale-110">1</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>De la femme au foyer idéale des années 50</p>
              </div>
              <div className="flex group">
                <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3 transition-transform duration-200 group-hover:scale-110">2</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>À l'objet sexuel dans la publicité des années 70-90</p>
              </div>
              <div className="flex group">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3 transition-transform duration-200 group-hover:scale-110">3</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Vers une représentation plus diversifiée aujourd'hui</p>
              </div>
              <div className="flex group">
                <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3 transition-transform duration-200 group-hover:scale-110">4</div>
                <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Initiatives contre les stéréotypes dans la communication</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 border-t border-amber-200 bg-white bg-opacity-70 rounded-lg transition-all duration-300 hover:bg-opacity-80">
          <p className="text-center text-lg font-bold text-amber-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
            "Les stéréotypes persistent mais s'affaiblissent à mesure que la société évolue"
          </p>
        </div>
      </div>
    </div>
  );
};

export default StereotypesPoster;
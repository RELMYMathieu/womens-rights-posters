import React, { useState } from 'react';

const PosterApp = () => {
  const [selectedPoster, setSelectedPoster] = useState(0);
  
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
      backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyRVF3BqKOtZE_5utBEAn6h3cLbwu1uphoQ&s')",
      backgroundColor: "rgba(217, 119, 6, 0.2)" // amber tint
    }
  ];
  
  return (
    <div className="min-h-screen">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: backgroundStyles[selectedPoster].backgroundImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2
        }}
      ></div>
      
      <div className="fixed inset-0" style={{ 
        backgroundColor: backgroundStyles[selectedPoster].backgroundColor,
        backdropFilter: "blur(8px)",
        zIndex: -1
      }}></div>
      
      <div className="relative z-10 p-4 flex flex-col min-h-screen">
        <header className="text-center mb-8 p-4 bg-white bg-opacity-40 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold text-indigo-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'évolution des droits accordés aux femmes de nationalité française du 20ème siècle jusqu'à nos jours</h1>
          <p className="text-gray-700 italic mt-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Projet EMC 2025</p>
        </header>
        
        <div className="flex justify-center gap-4 mb-8">
          <button 
            onClick={() => setSelectedPoster(0)}
            className={`px-4 py-2 rounded-lg font-medium ${selectedPoster === 0 ? 'bg-indigo-600 text-white' : 'bg-white bg-opacity-60 text-indigo-600 border border-indigo-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            Les femmes au travail
          </button>
          <button 
            onClick={() => setSelectedPoster(1)}
            className={`px-4 py-2 rounded-lg font-medium ${selectedPoster === 1 ? 'bg-rose-600 text-white' : 'bg-white bg-opacity-60 text-rose-600 border border-rose-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            Les femmes dans la vie politique
          </button>
          <button 
            onClick={() => setSelectedPoster(2)} 
            className={`px-4 py-2 rounded-lg font-medium ${selectedPoster === 2 ? 'bg-amber-600 text-white' : 'bg-white bg-opacity-60 text-amber-600 border border-amber-600'}`}
            style={{ fontFamily: "'Helvetica Neue', sans-serif" }}
          >
            Les femmes face aux stéréotypes
          </button>
        </div>
        
        <div className="flex justify-center flex-grow">
          {selectedPoster === 0 && <WorkPoster />}
          {selectedPoster === 1 && <PoliticalPoster />}
          {selectedPoster === 2 && <StereotypesPoster />}
        </div>
      </div>
    </div>
  );
};

const TimelineEvent = ({ year, title, description, color }) => (
  <div className="flex mb-4">
    <div className={`flex-shrink-0 w-20 h-20 ${color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
      {year}
    </div>
    <div className="ml-4 flex-grow">
      <h4 className="font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{title}</h4>
      <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>{description}</p>
    </div>
  </div>
);

const WorkPoster = () => (
  <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl">
    <div className="flex items-center mb-6">
      <div className="w-3 h-16 bg-indigo-600 mr-4"></div>
      <h2 className="text-4xl font-bold text-indigo-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes au travail</h2>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le plafond de verre</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg">
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le "plafond de verre" désigne l'ensemble des barrières invisibles qui limitent l'ascension des femmes aux postes à haute responsabilité au sein des organisations.</p>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Malgré des qualifications égales, les femmes se heurtent à des obstacles qui freinent leur progression professionnelle.</p>
        </div>
        <div className="flex-1 bg-indigo-100 bg-opacity-80 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center">
            <div className="h-40 flex items-end justify-center space-x-4">
              <div className="w-12 h-12 bg-indigo-200"></div>
              <div className="w-12 h-16 bg-indigo-300"></div>
              <div className="w-12 h-20 bg-indigo-400"></div>
              <div className="w-12 h-24 bg-indigo-500"></div>
              <div className="w-12 h-28 bg-indigo-600"></div>
            </div>
            <p className="mt-2 text-sm text-indigo-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Représentation des femmes aux postes de direction (1980-2020)</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-indigo-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'indépendance financière</h3>
      <div className="bg-white bg-opacity-70 p-4 rounded-lg">
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
          <div className="bg-white bg-opacity-70 p-6 rounded-lg border-l-4 border-red-600">
            <p className="text-2xl font-bold text-red-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>30%</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Différence moyenne de salaire entre hommes et femmes en 1917</p>
          </div>
          <div className="bg-white bg-opacity-70 p-6 rounded-lg border-l-4 border-amber-600 mt-4">
            <p className="text-2xl font-bold text-amber-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>16,8%</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Différence moyenne de salaire entre hommes et femmes en 2020</p>
          </div>
        </div>
        <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg">
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Malgré des avancées significatives, les inégalités salariales persistent.</p>
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>À compétences égales et postes équivalents, les femmes sont encore moins rémunérées que les hommes.</p>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le principe "à travail égal, salaire égal" reste un combat d'actualité.</p>
        </div>
      </div>
    </div>
  </div>
);

const PoliticalPoster = () => (
  <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl">
    <div className="flex items-center mb-6">
      <div className="w-3 h-16 bg-rose-600 mr-4"></div>
      <h2 className="text-4xl font-bold text-rose-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes dans la vie politique</h2>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-rose-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le droit de vote</h3>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 bg-white bg-opacity-70 p-4 rounded-lg">
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le 21 avril 1944, les femmes françaises obtiennent le droit de vote par une ordonnance du Gouvernement provisoire de la République française présidé par le général de Gaulle.</p>
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le 29 avril 1945, les Françaises votent pour la première fois lors des élections municipales.</p>
          <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>La France est l'un des derniers pays d'Europe occidentale à accorder le droit de vote aux femmes.</p>
        </div>
        <div className="flex-1 bg-rose-100 bg-opacity-80 rounded-lg p-4 flex items-center justify-center">
          <div className="text-center relative h-48 w-full">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-32 h-32 rounded-full border-8 border-rose-500"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full border-4 border-rose-600 flex items-center justify-center bg-white bg-opacity-90">
                <div className="text-rose-800 font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1944</div>
              </div>
            </div>
            <p className="absolute bottom-0 w-full text-sm text-rose-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>De l'exclusion à la participation citoyenne</p>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-rose-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>L'IVG dans la Constitution</h3>
      <div className="bg-white bg-opacity-70 p-6 rounded-lg mb-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-rose-600 text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1975</div>
          </div>
          <div className="ml-4">
            <p className="font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Loi Veil</p>
            <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Dépénalisation de l'interruption volontaire de grossesse (IVG) pour une période de 5 ans, grâce au combat de Simone Veil.</p>
          </div>
        </div>
      </div>
      <div className="bg-white bg-opacity-70 p-6 rounded-lg">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-rose-700 text-white rounded-full flex items-center justify-center font-bold text-lg" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>2023</div>
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
        <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
          <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1936</p>
          <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Trois femmes sous-secrétaires d'État dans le gouvernement du Front populaire</p>
        </div>
        <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
          <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>2000</p>
          <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Loi sur la parité en politique</p>
        </div>
        <div className="bg-white bg-opacity-70 p-4 rounded-lg text-center">
          <p className="text-rose-800 text-3xl font-bold" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>39,5%</p>
          <p className="text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Femmes à l'Assemblée nationale en 2022</p>
        </div>
      </div>
      
      <div className="mt-6 p-4 border-l-4 border-rose-600 bg-white bg-opacity-70 rounded-lg">
        <p className="italic" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>"Le chemin de l'égalité est long, mais notre détermination à le parcourir est sans faille."</p>
        <p className="text-right font-bold text-rose-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>— Simone Veil</p>
      </div>
    </div>
  </div>
);

const StereotypesPoster = () => (
  <div className="backdrop-blur-md bg-white bg-opacity-60 rounded-lg shadow-xl p-8 max-w-4xl">
    <div className="flex items-center mb-6">
      <div className="w-3 h-16 bg-amber-600 mr-4"></div>
      <h2 className="text-4xl font-bold text-amber-900" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Les femmes face aux stéréotypes</h2>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Du statut de mineure à citoyenne</h3>
      <div className="flex flex-col md:flex-row bg-white bg-opacity-70 rounded-lg overflow-hidden">
        <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-amber-200">
          <h4 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>1804 : Code Civil Napoléonien</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
            <li>La femme mariée a le statut de "mineure"</li>
            <li>"La femme doit obéissance à son mari" (Art. 213)</li>
            <li>Incapacité juridique et financière</li>
            <li>Le mari est "chef de famille"</li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          <h4 className="text-xl font-bold text-amber-800 mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Aujourd'hui</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
            <li>Pleine capacité juridique</li>
            <li>Égalité dans le couple consacrée par la loi</li>
            <li>Autonomie financière et administrative</li>
            <li>Partage légal de l'autorité parentale</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="mb-10">
      <h3 className="text-2xl font-bold text-amber-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>La lutte contre le patriarcat</h3>
      <div className="p-6 bg-white bg-opacity-70 rounded-lg mb-4">
        <h4 className="text-lg font-bold mb-2" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Qu'est-ce que le patriarcat ?</h4>
        <p className="text-gray-700 mb-4" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Le patriarcat est un système social, politique et économique dans lequel les hommes détiennent le pouvoir primaire et où les femmes sont largement exclues de ce pouvoir. Il se caractérise par l'autorité institutionnalisée des hommes par rapport aux femmes.</p>
        
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="flex-1 bg-white bg-opacity-80 p-4 rounded border border-amber-200">
            <h5 className="font-bold text-amber-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Mouvements féministes</h5>
            <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
              <li>Mouvement de libération des femmes (MLF) dans les années 1970</li>
              <li>Manifestations pour l'égalité salariale</li>
              <li>Lutte contre les violences faites aux femmes</li>
            </ul>
          </div>
          <div className="flex-1 bg-white bg-opacity-80 p-4 rounded border border-amber-200">
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
        <div className="bg-white bg-opacity-70 p-4 rounded-lg">
          <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Accès à l'éducation</h4>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-16 h-1 bg-amber-600 mr-3"></div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1880</span> : Loi Camille Sée créant les lycées de jeunes filles</p>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-1 bg-amber-600 mr-3"></div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1924</span> : Programmes d'enseignement identiques aux garçons</p>
            </div>
            <div className="flex items-center">
              <div className="w-32 h-1 bg-amber-600 mr-3"></div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">1975</span> : Mixité obligatoire dans tous les établissements publics</p>
            </div>
            <div className="flex items-center">
              <div className="w-40 h-1 bg-amber-600 mr-3"></div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}><span className="font-bold">2013</span> : Conventions interministérielles pour l'égalité à l'école</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-70 p-6 rounded-lg">
          <h4 className="text-lg font-bold mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Représentation dans les médias</h4>
          <p className="mb-3" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Evolution de l'image des femmes dans les médias français :</p>
          <div className="space-y-2">
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-amber-300 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3">1</div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>De la femme au foyer idéale des années 50</p>
            </div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3">2</div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>À l'objet sexuel dans la publicité des années 70-90</p>
            </div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3">3</div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Vers une représentation plus diversifiée aujourd'hui</p>
            </div>
            <div className="flex">
              <div className="w-6 h-6 rounded-full bg-amber-600 flex items-center justify-center text-white font-bold flex-shrink-0 mr-3">4</div>
              <p style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>Initiatives contre les stéréotypes dans la communication</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 border-t border-amber-200 bg-white bg-opacity-70 rounded-lg">
        <p className="text-center text-lg font-bold text-amber-800" style={{ fontFamily: "'Helvetica Neue', sans-serif" }}>
          "Les stéréotypes persistent mais s'affaiblissent à mesure que la société évolue"
        </p>
      </div>
    </div>
  </div>
);

export default PosterApp;
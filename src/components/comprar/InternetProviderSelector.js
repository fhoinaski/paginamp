'use client'
const InternetProviderSelector = ({ selectedProvider, onProviderChange }) => {
  const providers = [
      { id: '36', name: 'Chip Vivo', description: 'Plano de dados grátis', logo: '/chips/vivo.png', recommended: true },
      { id: '23', name: 'Chip Claro', description: 'Plano de dados grátis', logo: '/chips/claro.png' },
      { id: '32', name: 'Chip TIM', description: 'Plano de dados grátis', logo: '/chips/tim.png' },
  ];

  return (
      <div className="max-w-3xl mx-auto bg-white overflow-hidden">
          <h2 className="text-lg font-medium p-4">Escolha um provedor de internet para a sua Point</h2>
          <p className="text-sm text-gray-400 px-4 py-2">Estas são as recomendações de conexão com a internet para o seu endereço salvo.</p>
          <ul className="divide-y divide-gray-200 shadow-lg rounded-lg border">
              {providers.map((provider) => (
                  <li
                      key={provider.id}
                      className={`flex items-center p-4 ${selectedProvider === provider.id ? 'bg-gray-50' : ''}`}
                  >
                      <input
                          type="radio"
                          id={`provider-${provider.id}`}
                          name="provider"
                          value={provider.id}
                          checked={selectedProvider === provider.id}
                          onChange={() => onProviderChange(provider.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 cursor-pointer"
                      />
                      <label htmlFor={`provider-${provider.id}`} className="ml-3 flex flex-1 items-center">
                          <img src={provider.logo} alt={provider.name} className="w-12 h-12 object-contain mr-3" />
                          <div>
                              <p className="font-medium text-gray-900">{provider.name}</p>
                              <p className="text-sm text-gray-500">{provider.description}</p>
                          </div>
                      </label>
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default InternetProviderSelector;
'use client'
const InternetProviderSelector = ({ selectedProvider, onProviderChange, availableProviders = [] }) => {
  const allProviders = [
      { id: '36', name: 'Chip Vivo', description: 'Plano de dados grátis', logo: '/chips/vivo.png', recommended: true },
      { id: '23', name: 'Chip Claro', description: 'Plano de dados grátis', logo: '/chips/claro.png' },
      { id: '32', name: 'Chip TIM', description: 'Plano de dados grátis', logo: '/chips/tim.png' },
  ];
  
  // Mapear os IDs para nomes para facilitar a comparação
  const providerIdToName = {
    '36': 'vivo',
    '23': 'claro',
    '32': 'tim'
  };
  
  console.log('Available providers from API:', availableProviders);
  console.log('Currently selected provider:', selectedProvider);
  
  // Filtrar operadoras disponíveis com uma lógica simples
  const filteredProviders = allProviders.filter(provider => {
    // Se não houver providers disponíveis, mostrar todos
    if (!availableProviders || availableProviders.length === 0) {
      return true;
    }
    
    // Obter o nome normalizado da operadora atual
    const providerName = providerIdToName[provider.id].toLowerCase();
    
    // Verificar se existe alguma operadora disponível com este nome
    const isAvailable = availableProviders.some(ap => 
      ap.name.toLowerCase() === providerName
    );
    
    console.log(`Provider ${provider.id} (${providerName}): Available = ${isAvailable}`);
    
    return isAvailable;
  });
  
  console.log('Filtered providers:', filteredProviders);
  
  // Verificar se o provedor selecionado está na lista de provedores filtrados
  const isSelectedProviderAvailable = filteredProviders.some(
    provider => provider.id === selectedProvider
  );
  
  console.log('Is selected provider available?', isSelectedProviderAvailable);
  
  // Se o provedor selecionado não estiver disponível e houver provedores filtrados,
  // selecionar automaticamente o primeiro provedor disponível
  if (!isSelectedProviderAvailable && filteredProviders.length > 0) {
    console.log('Auto-selecting first available provider:', filteredProviders[0].id);
    setTimeout(() => {
      onProviderChange(filteredProviders[0].id);
    }, 0);
  }

  return (
      <div className="max-w-3xl mx-auto bg-white overflow-hidden">
          <h2 className="text-lg font-medium p-4">Escolha um provedor de internet para a sua Point</h2>
          <p className="text-sm text-gray-400 px-4 py-2">Estas são as opções de conexão com a internet disponíveis para este modelo.</p>
          <ul className="divide-y divide-gray-200 shadow-lg rounded-lg border">
              {filteredProviders.map((provider) => (
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
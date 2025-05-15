# Melhorias de Componentização e Reusabilidade

Este documento descreve as melhorias implementadas para aumentar a componentização e reusabilidade no projeto, tornando o código mais manutenível, consistente e fácil de ampliar.

## 1. Sistema de Ícones Centralizado

### Componente AppIcon

Foi criado um componente reutilizável `AppIcon` em `src/components/icons/AppIcon.js` que encapsula todos os ícones do `lucide-react` em uma interface consistente:

- **Benefícios:**
  - Interface unificada para todos os ícones
  - Padronização de tamanhos e cores
  - Facilitação da troca de biblioteca de ícones se necessário no futuro
  - Suporte a modo escuro e diferentes temas

### Mapeamento de Ícones (ICON_MAPPING)

O arquivo `src/utils/constants/icons.js` foi atualizado para usar o componente AppIcon, proporcionando:

- **Consistência:** Todos os ícones seguem o mesmo padrão visual
- **Manutenção simplificada:** Alterações em ícones podem ser feitas em um único lugar
- **Extensibilidade:** Novos ícones podem ser adicionados facilmente
- **Documentação embutida:** Cada ícone tem um nome descritivo

### Uso do Sistema de Ícones

Para usar um ícone, basta:

```jsx
import { getIcon } from '../utils/constants/icons';

// Em seu componente
<div>{getIcon('nome-do-icone')}</div>

// Ou importando diretamente o AppIcon
import AppIcon from '../components/icons/AppIcon';

<AppIcon name="CreditCard" size="lg" color="brand" />
```

## 2. Componente HowToChargeSection

Foi criado o componente reutilizável `HowToChargeSection` em `src/components/shared/HowToChargeSection.js` para padronizar as seções "Como cobrar com...":

- **Benefícios:**
  - Elimina duplicação de código
  - Garante consistência visual entre seções semelhantes
  - Simplifica manutenção e atualizações
  - Facilita a criação de novas seções para outras maquininhas

### Refatoração Aplicada

Os seguintes componentes foram refatorados para usar o novo componente:
- `SectionPointAir.js`
- `SectionPointMini.js`
- `SectionPointPro2.js`

### Como Usar

```jsx
import HowToChargeSection from '../shared/HowToChargeSection';

const MeuComponente = () => {
  const steps = [
    { text: "Passo 1: Faça isso" },
    { text: "Passo 2: Faça aquilo" },
    { text: "Passo 3: Conclua a operação" }
  ];

  return (
    <HowToChargeSection
      title="Como usar XYZ"
      steps={steps}
      imageSrc="/caminho/para/imagem.webp"
      imageAlt="Descrição da imagem"
      footerText="Texto opcional de rodapé"
    />
  );
};
```

## Recomendações para Expansão Futura

1. **Tokens de Design:** Considerar a criação de tokens de design para cores, espaçamentos, tipografia, etc.
2. **Componentização Adicional:** Identificar outros padrões repetitivos para componentização
3. **Documentação de Componentes:** Implementar Storybook ou uma documentação similar para visualizar e testar componentes
4. **Testes Unitários:** Adicionar testes para garantir que os componentes reutilizáveis funcionem conforme esperado 
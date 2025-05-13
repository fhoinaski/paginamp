// src/components/ReviewsAndQuestions.js
'use client';
import React, { useState } from 'react';
import { Star, MessageCircle, ThumbsUp, ThumbsDown } from 'lucide-react';

const MOCK_REVIEWS = [
  {
    id: 1,
    user: 'Carlos Silva',
    date: '15/02/2025',
    rating: 5,
    title: 'Excelente produto, superou minhas expectativas',
    comment: 'Comprei a maquininha há 2 semanas e estou muito satisfeito. O processo de configuração foi simples e o aplicativo é muito intuitivo. Recomendo!',
    helpful: 24,
    notHelpful: 2,
  },
  {
    id: 2,
    user: 'Mariana Oliveira',
    date: '10/02/2025',
    rating: 4,
    title: 'Ótima maquininha, mas o app poderia melhorar',
    comment: 'A maquininha em si é excelente, fácil de usar e com boa duração da bateria. O único ponto que poderia melhorar é o aplicativo, que às vezes fica lento.',
    helpful: 18,
    notHelpful: 4,
  },
  {
    id: 3,
    user: 'João Mendes',
    date: '05/02/2025',
    rating: 5,
    title: 'Melhor investimento para o meu negócio',
    comment: 'Desde que comecei a usar essa maquininha, minhas vendas aumentaram significativamente. Meus clientes adoram a facilidade de pagamento e eu adoro as taxas baixas!',
    helpful: 32,
    notHelpful: 1,
  },
];

const MOCK_QUESTIONS = [
  {
    id: 1,
    user: 'Pedro Almeida',
    date: '18/02/2025',
    question: 'A maquininha funciona sem internet?',
    answer: 'Sim, ela pode funcionar offline para algumas operações, mas para processar pagamentos é necessário estar conectado à internet via Wi-Fi ou dados móveis.',
    helpful: 15,
    notHelpful: 2,
  },
  {
    id: 2,
    user: 'Juliana Costa',
    date: '12/02/2025',
    question: 'Qual é o tempo médio de entrega?',
    answer: 'A entrega geralmente leva de 5 a 7 dias úteis para todo o Brasil. Algumas regiões podem ter prazos diferenciados.',
    helpful: 20,
    notHelpful: 0,
  },
  {
    id: 3,
    user: 'Rafael Souza',
    date: '08/02/2025',
    question: 'Posso usar a maquininha em outro país?',
    answer: 'A maquininha foi projetada para uso no Brasil e opera com a rede brasileira. Para uso internacional, recomendamos entrar em contato com o suporte para verificar a compatibilidade.',
    helpful: 12,
    notHelpful: 1,
  },
];

const ReviewsAndQuestions = ({ productName }) => {
  const [activeTab, setActiveTab] = useState('reviews');
  const [sortBy, setSortBy] = useState('recent');
  
  const sortedReviews = [...MOCK_REVIEWS].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-'));
    } else if (sortBy === 'helpful') {
      return b.helpful - a.helpful;
    } else if (sortBy === 'rating-high') {
      return b.rating - a.rating;
    } else if (sortBy === 'rating-low') {
      return a.rating - b.rating;
    }
    return 0;
  });
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden mt-8">
      <div className="flex border-b dark:border-slate-700">
        <button
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'reviews'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('reviews')}
        >
          Avaliações ({MOCK_REVIEWS.length})
        </button>
        <button
          className={`px-6 py-3 text-sm font-medium ${
            activeTab === 'questions'
              ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('questions')}
        >
          Perguntas ({MOCK_QUESTIONS.length})
        </button>
      </div>
      
      <div className="p-6">
        {activeTab === 'reviews' && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold dark:text-white">Avaliações de clientes para {productName}</h3>
              <div className="flex items-center">
                <label htmlFor="sortReviews" className="text-sm mr-2 dark:text-gray-300">
                  Ordenar por:
                </label>
                <select
                  id="sortReviews"
                  className="border rounded-md py-1 px-2 text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recent">Mais recentes</option>
                  <option value="helpful">Mais úteis</option>
                  <option value="rating-high">Maior avaliação</option>
                  <option value="rating-low">Menor avaliação</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <div key={review.id} className="border-b dark:border-slate-700 pb-6">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="font-medium dark:text-white">{review.title}</h4>
                      <div className="flex items-center mt-1">
                        <div className="flex mr-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              fill={review.rating >= star ? '#F59E0B' : 'none'}
                              className={`h-4 w-4 ${
                                review.rating >= star ? 'text-yellow-500' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          por {review.user} em {review.date}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        <span>{review.helpful}</span>
                      </button>
                      <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                        <ThumbsDown className="h-4 w-4 mr-1" />
                        <span>{review.notHelpful}</span>
                      </button>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{review.comment}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-4 py-2 rounded-md text-sm font-medium">
                Ver todas as avaliações
              </button>
            </div>
          </>
        )}

        {activeTab === 'questions' && (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Perguntas e respostas</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tem dúvidas sobre o {productName}? Veja as perguntas mais frequentes ou faça a sua própria.
              </p>
            </div>

            <div className="space-y-6">
              {MOCK_QUESTIONS.map((question) => (
                <div key={question.id} className="border-b dark:border-slate-700 pb-6">
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-brand mr-2 mt-1 shrink-0" />
                    <div>
                      <div className="flex items-center">
                        <h4 className="font-medium dark:text-white">{question.question}</h4>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Perguntado por {question.user} em {question.date}
                      </span>
                      <div className="mt-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                        <p className="text-gray-600 dark:text-gray-300">{question.answer}</p>
                      </div>
                      <div className="mt-2 flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>Útil ({question.helpful})</span>
                        </button>
                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
                          <ThumbsDown className="h-4 w-4 mr-1" />
                          <span>Não útil ({question.notHelpful})</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-slate-700 p-4 rounded-md">
              <h4 className="font-medium mb-2 dark:text-white">Faça sua pergunta</h4>
              <textarea
                className="w-full px-3 py-2 border rounded-md dark:bg-slate-800 dark:border-slate-600 dark:text-white mb-3"
                rows="3"
                placeholder="Digite sua dúvida sobre este produto..."
              ></textarea>
              <button className="bg-brand hover:bg-brand-dark text-white px-4 py-2 rounded-md text-sm font-medium">
                Enviar pergunta
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReviewsAndQuestions;
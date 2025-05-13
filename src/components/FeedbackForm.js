// components/FeedbackForm.js
'use client';
import React, { useState } from 'react';
import { Star, Send } from 'lucide-react';

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Por favor, selecione uma classificação');
      return;
    }
    
    // Aqui você pode adicionar a lógica para enviar o feedback para um servidor
    console.log({ rating, feedback, email });
    
    // Simula o envio bem-sucedido
    setSubmitted(true);
    setError(null);
  };

  if (submitted) {
    return (
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2 dark:text-white">Obrigado pelo seu feedback!</h3>
        <p className="text-gray-600 dark:text-gray-300">Sua opinião é muito importante para nós.</p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-4 dark:text-white">Compartilhe sua experiência</h3>
      
      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-md mb-4">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">Como você avalia nossos produtos?</label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoveredRating(star)}
                onMouseLeave={() => setHoveredRating(0)}
                className="focus:outline-none"
              >
                <Star
                  fill={(hoveredRating || rating) >= star ? '#F59E0B' : 'none'}
                  className={`h-8 w-8 ${
                    (hoveredRating || rating) >= star
                      ? 'text-yellow-500'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-gray-700 dark:text-gray-300 mb-2">
            Seu feedback
          </label>
          <textarea
            id="feedback"
            rows="4"
            className="w-full px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="Conte-nos sobre sua experiência..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          ></textarea>
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
            Seu email (opcional)
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md dark:bg-slate-700 dark:border-slate-600 dark:text-white"
            placeholder="email@exemplo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <button
          type="submit"
          className="bg-brand hover:bg-brand-dark text-white py-2 px-4 rounded-md flex items-center gap-2"
        >
          Enviar feedback
          <Send size={16} />
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
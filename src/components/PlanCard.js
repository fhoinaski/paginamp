import React from 'react';

const PlanCard = ({ title, isPromotional, features, promoDetails, rates, afterPromoRates }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-64">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        {isPromotional && (
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            Promocional
          </span>
        )}
      </div>
      
      <ul className="mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start mb-2">
            <svg className="w-4 h-4 text-green-500 mr-2 mt-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 13l4 4L19 7"></path>
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {promoDetails && (
        <div className="bg-green-100 p-3 rounded-md mb-4">
          <p className="text-xs text-center text-green-800">{promoDetails}</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            {Object.entries(rates).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs text-gray-600 ">{key}</p>
                <p className="font-bold text-green-600 text-xs">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {afterPromoRates && (
        <div>
          <p className="text-xs mb-2">Depois, para vendas acima de R$ 2 mil ao mês</p>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(afterPromoRates).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-xs text-gray-600">{key}</p>
                <p className="font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanCard;
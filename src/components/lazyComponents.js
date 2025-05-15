'use client';

import dynamic from 'next/dynamic';

// Lazy components usando dynamic import
export const LazyTestimonialSlider = dynamic(() => import('./TestimonialSlider'), {
  loading: () => <div className="h-64 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>,
  ssr: false
});

export const LazyFeedbackForm = dynamic(() => import('./FeedbackForm'), {
  loading: () => <div className="h-48 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg"></div>,
  ssr: false
}); 
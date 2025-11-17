
import React, { useState } from 'react';
import { getMealSuggestion } from '../services/geminiService';
import { kitchenData } from '../data/kitchenData';

const GeminiPlanner: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      setError('Please enter your meal preferences.');
      return;
    }
    setIsLoading(true);
    setResult('');
    setError('');
    try {
      const suggestion = await getMealSuggestion(prompt, kitchenData);
      setResult(suggestion);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="my-8 p-6 bg-[#024933]/50 border border-[#B91C1C] rounded-xl shadow-2xl">
      <div className="flex items-center mb-4">
        <span className="text-4xl mr-4">✨</span>
        <div>
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FBBF24]">
            AI Meal Planner
          </h3>
          <p className="text-[#D1C4A8]">
            Let Gemini help you! Describe your meal goals or carb budget below.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="e.g., 'Find me a full meal (entrée and dessert) for under 70g of carbs.' or 'What are the three lowest carb savory items?'"
          className="w-full h-24 p-3 bg-[#013220] border border-[#B91C1C] rounded-md text-white placeholder-[#D1C4A8] focus:ring-2 focus:ring-[#FFD700] transition resize-none"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center bg-[#B91C1C] hover:bg-[#991B1B] disabled:bg-[#B91C1C]/50 disabled:cursor-not-allowed disabled:text-white/70 text-white font-bold py-3 px-4 rounded-md transition-colors"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Getting Suggestions...
            </>
          ) : (
            'Ask Gemini'
          )}
        </button>
      </form>

      {error && <p className="mt-4 text-center text-[#FBBF24]">{error}</p>}
      
      {result && (
        <div className="mt-6 p-4 bg-[#013220] rounded-lg border border-[#B91C1C]">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-2">Here are some ideas for you:</h4>
            <div 
                className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br />') }} 
            />
        </div>
      )}
    </div>
  );
};

export default GeminiPlanner;
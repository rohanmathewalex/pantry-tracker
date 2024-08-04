// src/pages/api/recommend-recipes.js
import { OpenAI } from 'openai';

 
const openai = new OpenAI({
  
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { items } = req.body;
      const ingredients = items.map(item => item.name).join(', ');

      // Generate recipe prompt
      const prompt = `I have the following ingredients: ${ingredients}. Can you suggest some recipes that I can make with these ingredients?`;

      // Call OpenAI API
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'user', content: prompt }
        ],
        max_tokens: 150,
      });

      const recipes = response.choices[0].message.content.trim().split('\n\n').map(recipe => ({
        title: recipe.split('\n')[0],
        description: recipe.split('\n').slice(1).join('\n'),
      }));

      res.status(200).json({ recipes });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate recipe recommendations.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

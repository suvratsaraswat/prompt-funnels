/* import OpenAI from 'openai';

export async function generateFunnel(prompt: string) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // <-- now this will be loaded AFTER dotenv
  });

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are an expert funnel builder. Return funnel steps in bullet points based on user prompt.',
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return response.choices[0].message?.content;
}
 */

// Mock OpenAI Service for development
// Smart Mock OpenAI Service for development
export async function generateFunnel(prompt: string) {
  console.log('⚠️ Using SMART MOCK funnel generation.');

  const topics = [
    `• Awareness Stage: Write blog posts highlighting ${prompt}.`,
    `• Consideration Stage: Host a webinar explaining the benefits of ${prompt}.`,
    `• Decision Stage: Offer free trials or discounted pricing for ${prompt}.`,
    `• Retention Stage: Launch loyalty programs and send newsletters focused on ${prompt}.`,
    `• Advocacy Stage: Encourage satisfied customers to share testimonials about ${prompt}.`
  ];

  const shuffled = topics.sort(() => 0.5 - Math.random()); // Shuffle steps

  return shuffled.join('\n');
}

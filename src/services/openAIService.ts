import { Configuration, OpenAIApi } from 'openai';

class OpenAIService {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public async getProductBundles(trendsData: any): Promise<any> {
    try {
      const response = await this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Given the following T-shirt trends data from France, suggest seasonal product bundles: ${JSON.stringify(
          trendsData
        )}`,
        max_tokens: 100,
      });
      return response.data;
    } catch (error) {
      throw new Error('Error interacting with OpenAI API');
    }
  }
}

export default new OpenAIService();

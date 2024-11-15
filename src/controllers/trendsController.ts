import { Request, Response } from 'express';
import googleTrendsService from '../services/googleTrendsService';
import openAIService from '../services/openAIService';

class TrendsController {
  public async handleModelTraining(req: Request, res: Response): Promise<void> {
    try {
      const trendsData = await googleTrendsService.fetchTrendsData();

      const aiResponse = await openAIService.getProductBundles(trendsData);

      res.json({ message: 'Product bundles generated', data: aiResponse });
    } catch (error) {
      res.status(500).json({ message: 'Error processing data', error: error.message });
    }
  }
}

export default new TrendsController();

import axios from 'axios';

class GoogleTrendsService {
  public async fetchTrendsData(): Promise<any> {
    try {
      const response = await axios.get(`https://api.trends.google.com/v1/trends`, {
        params: {
          keyword: 'T-shirt',
          geo: 'FR',
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Error fetching Google Trends data');
    }
  }
}

export default new GoogleTrendsService();

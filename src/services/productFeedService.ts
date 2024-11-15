import fs from 'fs';
import path from 'path';

class ProductFeedService {
  private feedPath = path.join(__dirname, '../data/productFeed.json');

  public getProductFeed(): any {
    const feedData = fs.readFileSync(this.feedPath, 'utf-8');
    return JSON.parse(feedData);
  }
}

export default new ProductFeedService();

import { sum } from "../sum";

describe('method to sum two numbers', () => {
    test('should sum two numbers', async () => {
      expect(sum(1,1)).toEqual(2);
    });
});
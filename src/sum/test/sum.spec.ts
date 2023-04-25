import { sum } from "../sum";

describe('test', () => {
    test('add', async () => {
      expect(sum(1,1)).toEqual(2);
    });
});
import pagination from "./index";

test("pagination shoul be a function", () => {
  expect(typeof pagination).toEqual("function");
});

test("pagination({total: 1, activePage: 1} should return [1]", () => {
  const params = { total: 1, activePage: 1 };
  const result = [1];

  expect(pagination(params)).toEqual(result);
});
test("pagination({total: 2, activePage: 1} should return [1,2]", () => {
  const params = { total: 2, activePage: 1 };
  const result = [1, 2];

  expect(pagination(params)).toEqual(result);
});
test("pagination({total: 5, activePage: 1} should return [1,2,3,4,5]", () => {
  const params = { total: 5, activePage: 1 };
  const result = [1, 2, 3, 4, 5];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 6, activePage: 1} should return [1,2,3,"...", 6]', () => {
  const params = { total: 6, activePage: 1 };
  const result = [1, 2, 3, "...", 6];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 6, activePage: 2} should return [1,2,3,"...", 6]', () => {
  const params = { total: 6, activePage: 2 };
  const result = [1, 2, 3, "...", 6];

  expect(pagination(params)).toEqual(result);
});
test("pagination({total: 6, activePage: 3} should return [1,2,3,4,5,6]", () => {
  const params = { total: 6, activePage: 3 };
  const result = [1, 2, 3, 4, 5, 6];

  expect(pagination(params)).toEqual(result);
});
test("pagination({total: 6, activePage: 4} should return [1,2,3,4,5,6]", () => {
  const params = { total: 6, activePage: 4 };
  const result = [1, 2, 3, 4, 5, 6];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 6, activePage: 5} should return [1, "..." ,4,5,6]', () => {
  const params = { total: 6, activePage: 5 };
  const result = [1, "...", 4, 5, 6];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 6, activePage: 6} should return [1,"...", 4,5,6]', () => {
  const params = { total: 6, activePage: 6 };
  const result = [1, "...", 4, 5, 6];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 7, activePage: 3} should return [1,2,3, 4, "...", 7]', () => {
  const params = { total: 7, activePage: 3 };
  const result = [1, 2, 3, 4, "...", 7];

  expect(pagination(params)).toEqual(result);
});
test("pagination({total: 7, activePage: 4} should return [1,2,3, 4, 5,6, 7]", () => {
  const params = { total: 7, activePage: 4 };
  const result = [1, 2, 3, 4, 5, 6, 7];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 7, activePage: 5} should return [1,"...",4, 5,6, 7]', () => {
  const params = { total: 7, activePage: 5 };
  const result = [1, "...", 4, 5, 6, 7];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 7, activePage: 6} should return [1,"...", 5,6, 7]', () => {
  const params = { total: 7, activePage: 6 };
  const result = [1, "...", 5, 6, 7];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 7, activePage: 7} should return [1,"...",5,6, 7]', () => {
  const params = { total: 7, activePage: 7 };
  const result = [1, "...", 5, 6, 7];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 15, activePage:8} should return [1,"...",7,8,9,"...",15]', () => {
  const params = { total: 15, activePage: 8 };
  const result = [1, "...", 7, 8, 9, "...", 15];

  expect(pagination(params)).toEqual(result);
});
test('pagination({total: 15} should return [1,2,3, "...", 15]', () => {
  const params = { total: 15};
  const result = [1,2,3, "...", 15];

  expect(pagination(params)).toEqual(result);
});
test('pagination({}) should return [1]', () => {
  const params = {};
  const result = [1];

  expect(pagination(params)).toEqual(result);
});
test('pagination() should return [1]', () => {
  const result = [1];

  expect(pagination()).toEqual(result);
});
test('pagination({total:"abc", activePage:1}) should throw an error', async () => {
    const params = {total: 'abc', firstPage: 1};
    const result = 'total should be a number'
    try{
        await pagination(params)
    }catch(e){
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.message).toEqual(result)
    }
});
test('pagination({total:10, activePage:"1a"}) should throw an error', async () => {
    const params = {total: 10, firstPage: '1a'};
    const result = 'activePage should be a number'

    try{
        await pagination(params)
    }catch(e){
        // eslint-disable-next-line jest/no-conditional-expect
        expect(e.message).toEqual(result)
    }
});

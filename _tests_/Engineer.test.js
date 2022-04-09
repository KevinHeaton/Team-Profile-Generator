const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Kevin', 3, 'kevin@fakeemail.com', 'engineer', 'KevinHeaton');

it('creates engineer object', () => {
  expect(engineer.name).toBe('Kevin');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe('kevin@fakeemail.com');
  expect(engineer.role).toBe('engineer');
  expect(engineer.github).toBe('KevinHeaton');
});

it("gets engineer's github as an object", () => {
  expect(engineer.getGithub()).toStrictEqual({github: 'KevinHeaton'});
});

it('gets engineer role as an object', () => {
  expect(engineer.getRole()).toStrictEqual({role: 'engineer'});
});

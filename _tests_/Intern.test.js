const Intern = require('../lib/Intern');
const intern = new Intern('Alex', 6, 'alex@fakeemail.com', 'intern', 'Texas');

it('creates intern object', () => {
  expect(intern.name).toBe('Alex');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe('alex@fakeemail.com');
  expect(intern.role).toBe('intern');
  expect(intern.school).toBe('Texas');
});

it('gets intern role as an object', () => {
  expect(intern.getRole()).toStrictEqual({role: 'intern'});
});

it("gets intern's school as an object", () => {
  expect(intern.getSchool()).toStrictEqual({school: 'Texas'});
});
const Manager = require('../lib/Manager');
const manager = new Manager('Jared', 1, 'jared@fakeemail.com', 'manager', 123);

it('creates manager object', () => {
  expect(manager.name).toBe('Jared');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe('jared@fakeemail.com');
  expect(manager.role).toBe('manager');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

it('gets manager role as an object', () => {
  expect(manager.getRole()).toStrictEqual({role: 'manager'});
});

it('gets manager office number as an object', () => {
  expect(manager.getOfficeNumber()).toStrictEqual({officeNumber: 123});
})
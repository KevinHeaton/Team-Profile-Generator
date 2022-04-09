const Employee = require('../lib/Employee');
const employee = new Employee('John', 4, 'john@fakeemail.com', 'employee');

it('creates employee object', () => {
  expect(employee.name).toBe('John');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe('john@fakeemail.com');
});

it("gets employee's name as an object", () => {
  expect(employee.getName()).toStrictEqual({name:'John'});
});

it("gets employee's id as an object", () => {
  expect(employee.getID()).toStrictEqual({id: 4});
});

it('gets employee email as an object', () => {
  expect(employee.getEmail()).toStrictEqual({email: 'john@fakeemail.com'});
});

it('gets employee role as an object', () => {
  expect(employee.getRole()).toStrictEqual({role: 'employee'});
})
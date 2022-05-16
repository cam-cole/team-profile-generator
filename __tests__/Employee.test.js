const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.name).toBe('Cameron');
    expect(employee.id).toBe('01234');
    expect(employee.email).toBe('cameronEmail@email.net');

})
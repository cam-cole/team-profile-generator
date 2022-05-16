const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.name).toBe('Cameron');
    expect(employee.id).toBe('01234');
    expect(employee.email).toBe('cameronEmail@email.net');

})

test('retrieves name of employee', () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.getName()).toBe('Cameron');
})

test('retrieves id of employee', () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.getId()).toBe('01234')
})

test('retrieves email of employee', () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.getEmail()).toBe('cameronEmail@email.net');
})

test("returns 'employee' as role", () => {
    const employee = new Employee('Cameron', '01234', 'cameronEmail@email.net');

    expect(employee.getRole()).toBe('Employee');
})
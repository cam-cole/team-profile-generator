const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Cameron', '01234', 'cameronEmail@email.net', '101');

    expect(manager.name).toBe('Cameron');
    expect(manager.id).toBe('01234');
    expect(manager.email).toBe('cameronEmail@email.net');
    expect(manager.officeNumber).toBe('101');
})

test("returns 'Manager' as employee role", () => {
    const manager = new Manager('Cameron', '01234', 'cameronEmail@email.net', '101');

    expect(manager.getRole()).toBe('Manager');
})
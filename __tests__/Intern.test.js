const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Cameron', '01234', 'cameronEmail@email.net', 'UW-Madison');

    expect(intern.name).toBe('Cameron');
    expect(intern.id).toBe('01234');
    expect(intern.email).toBe('cameronEmail@email.net');
    expect(intern.school).toBe('UW-Madison');
})

test('gets employee school', () => {
    const intern = new Intern('Cameron', '01234', 'cameronEmail@email.net', 'UW-Madison');

    expect(intern.getSchool()).toBe('UW-Madison');
})

test("return 'intern' as employee role", () => {
    const intern = new Intern('Cameron', '01234', 'cameronEmail@email.net', 'UW-Madison');

    expect(intern.getRole()).toBe('Intern');
})
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Cameron', '01234', 'cameronEmail@email.net', 'gitCam');

    expect(engineer.name).toBe('Cameron');
    expect(engineer.id).toBe('01234');
    expect(engineer.email).toBe('cameronEmail@email.net');
    expect(engineer.github).toBe('gitCam');
})

test('retrieves the github of the Engineer', () => {
    const engineer = new Engineer('Cameron', '01234', 'cameronEmail@email.net', 'gitCam');

    expect(engineer.getGithub()).toBe('gitCam');
})

test("returns 'Engineer' as employee role", () => {
    const engineer = new Engineer('Cameron', '01234', 'cameronEmail@email.net', 'gitCam');

    expect(engineer.getRole()).toBe('Engineer');
})
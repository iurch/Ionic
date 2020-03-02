import { PersonNameUppercasePipe } from './person-name-uppercase.pipe';

describe('PersonNameUppercasePipe', () => {
  it('create an instance', () => {
    const pipe = new PersonNameUppercasePipe();
    expect(pipe).toBeTruthy();
  });
});

import { IamModule } from './iam.module';

describe('IamModule', () => {
  let iamModule: IamModule;

  beforeEach(() => {
    iamModule = new IamModule();
  });

  it('should create an instance', () => {
    expect(iamModule).toBeTruthy();
  });
});

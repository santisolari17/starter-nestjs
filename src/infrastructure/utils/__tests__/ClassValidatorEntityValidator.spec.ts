import { Test, TestingModule } from '@nestjs/testing';
import { ValidationError } from '../../errors/ValidationError/ValidationError';
import { ClassValidatorEntityValidator } from '../ClassValidatorEntityValidator';
import {
  NestedType,
  TestClassValidatorEntity,
  TestNestedClassValidatorEntity,
} from './ClassValidatorEntityValidator.mocks';

describe('#Utils module - ClassValidatorEntityValidator test suite', () => {
  let entityValidator: ClassValidatorEntityValidator;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [ClassValidatorEntityValidator],
      exports: [ClassValidatorEntityValidator],
    }).compile();

    entityValidator = moduleFixture.get(ClassValidatorEntityValidator);
  });

  it('Should not throw an error if the entity is valid', async () => {
    const mockInstance = new TestClassValidatorEntity({
      mustBeString: 'helloworld',
      mustBeNumber: 123,
    });
    let error;

    try {
      await entityValidator.validate(mockInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();
  });

  it('Should throw an error of type ValidationError if the entity is not valid', async () => {
    const mockInstance = new TestClassValidatorEntity({
      mustBeString: 123,
      mustBeNumber: 'helloworld',
    });
    const expectedPropertiesWithErrors = 2;
    let error;

    try {
      await entityValidator.validate(mockInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(ValidationError);
    expect(error.errors.length).toEqual(expectedPropertiesWithErrors);
  });

  it('Should not throw an error if a nested entity property is valid', async () => {
    const mockInstance = new TestNestedClassValidatorEntity({
      mustBeString: 'helloworld',
      mustBeNumber: 123,
      mustBeNestedType: new NestedType(new Date()),
    });
    let error;

    try {
      await entityValidator.validate(mockInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeUndefined();
  });

  it('Should throw an error if a nested entity property is not valid', async () => {
    const mockInstance = new TestNestedClassValidatorEntity({
      mustBeString: 'helloworld',
      mustBeNumber: 123,
      mustBeNestedType: new NestedType('invalidNestedType'),
    });
    const expectedPropertiesWithErrors = 1;
    let error;

    try {
      await entityValidator.validate(mockInstance);
    } catch (err) {
      error = err;
    }

    expect(error).toBeInstanceOf(ValidationError);
    expect(error.errors.length).toEqual(expectedPropertiesWithErrors);
  });
});

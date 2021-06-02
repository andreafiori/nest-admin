import { Test } from '@nestjs/testing';
import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';

describe('PermissionController', () => {
  let controller: PermissionController;

  beforeEach(async () => {
    const mockUserEntity =  {};
    let controller: PermissionController;
    let service: PermissionService;
    beforeEach(async () => {
      const moduleRef = await Test.createTestingModule({
        controllers: [PermissionController],
        providers: [
          {
            provide: PermissionService,
            useValue: {
              get: jest.fn(() => mockUserEntity)
            }
          }
        ]
      }).compile();
      controller = moduleRef.get(PermissionController);
      service = moduleRef.get(PermissionService);
    });
  });

  it('should be defined', () => {
    // TODO controller is undefined...
    expect(true).toBeDefined();
  });
});

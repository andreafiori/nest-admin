import { Test, TestingModule } from '@nestjs/testing';
import { PermissionService } from './permission.service';

describe('PermissionService', () => {
  let service: PermissionService;

  beforeEach(async () => {
    // Mock service
    const mockUserEntity = {
      all: () => [
        {
          id: 1,
          name: 'view_users'
        }
      ]
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: PermissionService,
          useValue: {
            get: jest.fn(() => mockUserEntity)
          }
        }
      ],
    }).compile();

    service = module.get<PermissionService>(PermissionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

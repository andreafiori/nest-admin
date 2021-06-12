import { Test, TestingModule } from '@nestjs/testing';
import { RoleService } from './role.service';

describe('RoleService', () => {
  let service: RoleService;

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
          provide: RoleService,
          useValue: {
            get: jest.fn(() => mockUserEntity)
          }
        }
      ],
    }).compile();

    service = module.get<RoleService>(RoleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

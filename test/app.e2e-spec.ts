import { Test } from "@nestjs/testing"
import { AppModule } from "../src/app.module"
import { INestApplication, ValidationPipe } from "@nestjs/common";
import { PrismaService } from "../src/prisma/prisma.service";
import { AuthDto } from "src/auth/dto";
import { assert } from "console";

describe('App e2e', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
      whitelist: true,
    })
    );
    await app.init()
    await app.listen(3333)

    prisma = app.get(PrismaService);
    await prisma.cleanDb();
  });


  afterAll(() => {
    app.close();
  })


  describe('Auth', () => {
    describe('Signup', () => {
      it('should sign up',
        () => {
          const dto: AuthDto = {
            email: "test@test.com",
            password: '123'
          }
          console.log(assert(true))
          return assert(true);
        }

      )
    })
    describe('Signin', () => {
      it.todo('should signin')
    })
  });

  describe('User', () => {
    describe('Get me', () => { })
    describe('Edit me', () => { })
  });

  describe('Bookmarks', () => {
    describe('Create bookmark', () => { it.todo('should signin')})
    describe('Get bookmark', () => { it.todo('should signin')})
    describe('Get bookmark by id', () => {it.todo('should signin') })
    describe('Edit bookmark', () => {it.todo('should signin') })
    describe('Delete bookmark', () => {it.todo('should signin') })
    describe('', () => { })
  });
})  
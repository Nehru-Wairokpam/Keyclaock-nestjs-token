import { Controller, Get, UseGuards , Headers} from '@nestjs/common';
import { AuthGuard, RoleGuard, Roles, Unprotected } from 'nest-keycloak-connect';
import { AppService } from './app.service';
import jwt_decode from 'jwt-decode';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dev')
  @Unprotected()
  //@Roles({ roles: ['dev'] })
  // @Roles('dev')
  getHello(@Headers() headers): string {
    console.log("-------------")

    return jwt_decode(headers.authorization)
    //return this.appService.getHello('dev');
  }

  @Get('qa')
  // @Roles({ roles: ['qa'] })
  getHello2(): string {
    return this.appService.getHello('tester');
  }

}

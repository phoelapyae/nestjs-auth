import { Body, Controller, Post } from '@nestjs/common';
import { GoogleAuthenticationService } from './google-authentication.service';
import { GooglTokenDto } from '../dto/googl-token.dto/googl-token.dto';
import { Auth } from '../decorators/auth.decorator';
import { AuthType } from '../enums/auth-type.enum';

@Auth(AuthType.None)
@Controller('authentication/google')
export class GoogleAuthenticationController {
    constructor(
        private readonly googleAuthService: GoogleAuthenticationService
    ){}

    @Post()
    authenticate(@Body() tokenDto: GooglTokenDto) {
        return this.googleAuthService.authenticate(tokenDto.token);
    }
}
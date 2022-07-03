import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminsService } from 'src/admins/admins.service';
import { LoginAdminInput, LoginAdminResponse } from 'src/graphql';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private adminService: AdminsService,
    private jwtService: JwtService,
  ) {}

  async validateAdmin(email: string, password: string): Promise<any> {
    const admin = await this.adminService.findAdmin(email);
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const { password, ...result } = admin;
      return result;
    }
    // Not found, not validated
    return null;
  }

  async login(loginAdminInput: LoginAdminInput): Promise<LoginAdminResponse> {
    const admin = await this.adminService.findAdmin(loginAdminInput.email);
    const { password, ...result } = admin;
    return {
      accessToken: this.jwtService.sign(
        {
          email: admin.email,
          name: admin.name,
          sub: admin.id,
        },
        {
          secret: process.env.JWT_SECRET,
          expiresIn: process.env.JWT_EXPIRES,
        },
      ),
      admin: result,
    };
  }
}

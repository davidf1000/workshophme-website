import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginAdminInput } from 'src/graphql';
import { AuthGqlGuard } from './gql-auth.guard';
import { AuthService } from './auth.service';
import { validateLoginInput } from 'src/utils/input.validator';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation('login')
  @UseGuards(AuthGqlGuard)
  login(@Args('createLoginInput') createLoginInput: LoginAdminInput) {
    validateLoginInput(createLoginInput);
    return this.authService.login(createLoginInput);
  }
}

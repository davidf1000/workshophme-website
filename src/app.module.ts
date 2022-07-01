import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { AdminsModule } from './admins/admins.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { RentsModule } from './rents/rents.module';
import { ToolsModule } from './tools/tools.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLScalarType } from 'graphql';
import { ArticlesModule } from './articles/articles.module';
import { ShopsModule } from './shops/shops.module';
import { MulterModule } from '@nestjs/platform-express';

const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value: any) {
    return new Date(value);
  },
  serialize(value: any) {
    return value.toISOString();
  },
});

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads',
      limits: {
        files: 1,
        fileSize: 2000000, //2MB
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'client', 'build'),
      exclude: ['/api*', '/graphql'],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ['./**/*.graphql'],
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      resolvers: {
        DateTime: dateScalar,
      },
    }),
    AdminsModule,
    RentsModule,
    ToolsModule,
    AuthModule,
    ArticlesModule,
    ShopsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

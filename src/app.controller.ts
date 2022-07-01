import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { editFileName, imageFileFilter } from './utils/multer.fileupload';
import { diskStorage } from 'multer';
import { JwtAuthGuardHTTP } from './auth/http-jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('version')
  getVersion() {
    return this.appService.getVersion();
  }

  @UseGuards(JwtAuthGuardHTTP)
  @Post('upload')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      path: '/uploads/' + file.filename,
    };
  }
}

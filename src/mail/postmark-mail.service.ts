import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostmarkMailService implements MailService {
  sendMail(): string {
    return 'Postmark Mail!';
  }
}

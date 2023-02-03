import { Injectable } from '@nestjs/common';

@Injectable()
export class ReadMessageUseCase {
  public execute(message: string, messageId: string) {
    console.log(message, messageId);
  }
}

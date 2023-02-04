import { Injectable } from '@nestjs/common';
import { SQS_QUEUE_NAME } from '../../domain/constants';
import { SQSProducer } from '../../providers/sqs/producers';

@Injectable()
export class ReadMessageUseCase {
  constructor(private readonly sqsProducer: SQSProducer) {}

  public async execute(message: string, messageId: string) {
    console.log(message, messageId);
    await this.sqsProducer.emit(SQS_QUEUE_NAME.queue2, message);
  }
}

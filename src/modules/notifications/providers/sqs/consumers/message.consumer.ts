import { Injectable } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';
import { SQS } from 'aws-sdk';
import { SQS_QUEUE_NAME } from 'src/modules/notifications/domain/constants';
import { ReadMessageUseCase } from '../../../application/usecases';

@Injectable()
export class SQSConsumer {
  constructor(private readonly readMessage: ReadMessageUseCase) {}

  @SqsMessageHandler(SQS_QUEUE_NAME.queue1, false)
  public handlerMessage({ Body = '', ReceiptHandle = '' }: SQS.Message) {
    this.readMessage.execute(Body, ReceiptHandle);
  }

  @SqsConsumerEventHandler(SQS_QUEUE_NAME.queue1, 'processing_error')
  public error(error: Error, _message: SQS.Message) {
    console.log(error, _message);
  }
}

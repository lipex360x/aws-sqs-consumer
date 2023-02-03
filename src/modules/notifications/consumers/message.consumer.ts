import { Injectable } from '@nestjs/common';
import { SqsConsumerEventHandler, SqsMessageHandler } from '@ssut/nestjs-sqs';
import { SQS } from 'aws-sdk';
import { SQS_QUEUE_NAME } from 'src/constants';

@Injectable()
export class MessageConsumer {
  @SqsMessageHandler(SQS_QUEUE_NAME, false)
  public readMessage({ Body = '', ReceiptHandle = '' }: SQS.Message) {
    console.log(Body, ReceiptHandle);
  }

  @SqsConsumerEventHandler(SQS_QUEUE_NAME, 'processing_error')
  public error(error: Error, _message: SQS.Message) {
    console.log(error, _message);
  }
}

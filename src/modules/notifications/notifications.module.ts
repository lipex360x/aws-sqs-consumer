import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SQS_QUEUE_NAME } from 'src/modules/notifications/domain/constants';
import { ReadMessageUseCase } from './application/usecases';
import { SQSConsumer } from './providers/sqs/consumers/message.consumer';
import { SQSProducer } from './providers/sqs/producers';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SqsModule.register({
      consumers: [
        {
          name: SQS_QUEUE_NAME.myQueue,
          queueUrl: `${process.env.AWS_URL}/${SQS_QUEUE_NAME.myQueue}`,
        },
      ],
      producers: [
        {
          name: SQS_QUEUE_NAME.queue2,
          region: 'us-east-1',
          queueUrl: `${process.env.AWS_URL}/${SQS_QUEUE_NAME.queue2}`,
        },
      ],
    }),
  ],
  providers: [ReadMessageUseCase, SQSConsumer, SQSProducer],
})
export class NotificationsModule {}

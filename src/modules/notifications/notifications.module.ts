import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SQS_QUEUE_NAME } from 'src/modules/notifications/domain/constants';
import { ReadMessageUseCase } from './application/usecases';
import { MessageConsumer } from './providers/sqs/consumers/message.consumer';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    SqsModule.register({
      consumers: [
        {
          name: SQS_QUEUE_NAME,
          queueUrl: `${process.env.AWS_URL}/${SQS_QUEUE_NAME}`,
          shouldDeleteMessages: false,
        },
      ],
    }),
  ],
  providers: [MessageConsumer, ReadMessageUseCase],
})
export class NotificationsModule {}

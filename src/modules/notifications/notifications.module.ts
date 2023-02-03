import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SqsModule } from '@ssut/nestjs-sqs';
import { SQS_QUEUE_NAME } from 'src/constants';
import { MessageConsumer } from './consumers/message.consumer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SqsModule.register({
      consumers: [
        {
          name: SQS_QUEUE_NAME,
          queueUrl: `${process.env.AWS_URL}/${SQS_QUEUE_NAME}`,
          // shouldDeleteMessages: false,
        },
      ],
    }),
  ],
  providers: [MessageConsumer],
})
export class NotificationsModule {}

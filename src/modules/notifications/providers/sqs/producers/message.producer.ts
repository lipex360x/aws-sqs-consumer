import { randomUUID } from 'node:crypto';

import { Injectable } from '@nestjs/common';
import { SqsService } from '@ssut/nestjs-sqs';
import { SQS_QUEUE_NAME } from 'src/modules/notifications/domain/constants';

@Injectable()
export class SQSProducer {
  constructor(private readonly sqsService: SqsService) {}

  public async emit(queue: keyof typeof SQS_QUEUE_NAME, payload: any) {
    await this.sqsService.send(SQS_QUEUE_NAME[queue], {
      id: randomUUID(),
      body: payload,
      delaySeconds: 0,
    });
  }
}

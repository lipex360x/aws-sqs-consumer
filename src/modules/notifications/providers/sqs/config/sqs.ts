import { SQS } from 'aws-sdk';
import { SQS_QUEUE_URL } from 'src/modules/notifications/domain/constants';

export const sqs = new SQS({ endpoint: SQS_QUEUE_URL });

import { SQS } from 'aws-sdk';

export const sqs = new SQS({
  endpoint: process.env.AWS_URL,
  region: process.env.AWS_REGION,
});

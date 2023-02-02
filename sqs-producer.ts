/* eslint-disable */

import { SQS } from 'aws-sdk';

export const sqs = new SQS({ endpoint: 'http://localhost:4566', region: 'us-east-1' });

void (async () => {
  const message = {
    sponsorId: 1,
    processId: 1,
    expiresAt: null,
    items: [
      {
        uuid: 'any uuid',
        externalId: 'any externalId',
        paymentDate: '100',
        realPaymentDate: 123,
        paymentValue: 1000,
        supplierGovernmentId: 'any supplierGovernmentId',
        supplierName: 'any supplierName',
        invoiceNumber: 'any invoiceNumber',
        invoiceKey: 'any invoiceKey',
        installment: 1000,
        totalInstallment: 1000,
      },
    ],
    eventType: 'PayableDuplicatedEvent',
  }

  await sqs.createQueue({ QueueName: 'payables_duplicates' }).promise();

  await sqs.sendMessage({
    QueueUrl: 'http://localhost:4566/000000000000/payables_duplicates',
    MessageBody: JSON.stringify(message),
  }).promise()

  console.log(message)

})();


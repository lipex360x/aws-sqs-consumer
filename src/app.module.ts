import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [ConfigModule.forRoot(), NotificationsModule],
})
export class AppModule {}

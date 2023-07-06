// import { Injectable } from '@nestjs/common';
// import { Producer, Consumer, Kafka, EachMessagePayload } from 'kafkajs';
// import Config from '../utils/Config';

// @Injectable()
// export class CartAbandonedService {
//   private kafka: Kafka;
//   private producer: Producer;
//   private consumer: Consumer;
//   private topic = 'cart-abandoned';

//   constructor() {
//     this.kafka = new Kafka({
//       brokers: [Config.kafka.address],
//     });
//     // this.createTopics();
//     this.producer = this.kafka.producer();
//     this.consumer = this.kafka.consumer({
//       groupId: `${Config.kafka.group}-${this.topic}`,
//       allowAutoTopicCreation: true,
//     });
//     this.connect();
//   }

//   private async connect(): Promise<void> {
//     await this.producer.connect();
//     await this.consumer.connect();
//     await this.consumer.subscribe({ topic: this.topic });
//     await this.consumer.run({
//       eachMessage: this.handleMessage.bind(this),
//     });
//   }

//   async sendMessage(topic: string, message: string): Promise<void> {
//     console.log('PAJRPOAIJROIAJROIAJROAIRJOIAJRIO');
    
//     // await this.producer.send({
//     //   topic,
//     //   messages: [{ value: message }],
//     // });
//   }

//   private async handleMessage({ message }: EachMessagePayload): Promise<void> {
//     console.log('Received Kafka message:', message.value.toString());
//   }

//   async close(): Promise<void> {
//     await this.producer.disconnect();
//     await this.consumer.disconnect();
//   }

//   async createTopics() {
//     const admin = this.kafka.admin();
//     await admin.createTopics({
//       topics: [{ topic: this.topic }],
//       waitForLeaders: true,
//     });
//   }
// }

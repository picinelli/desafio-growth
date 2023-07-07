export default {
  server: {
    port: Number(process.env.SERVER_PORT),
  },
  kafka: {
    address: `${process.env.APP_KAFKA_URL}:${process.env.APP_KAFKA_PORT}`,
  },
};

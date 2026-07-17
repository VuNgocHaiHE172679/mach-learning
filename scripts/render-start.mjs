import { preview } from "vite";

const fallbackPort = 4173;
const port = Number.parseInt(process.env.PORT ?? `${fallbackPort}`, 10);

if (!Number.isInteger(port) || port < 1 || port > 65_535) {
  throw new Error(`PORT không hợp lệ: ${process.env.PORT}`);
}

const server = await preview({
  preview: {
    host: "0.0.0.0",
    port,
    strictPort: true,
  },
});

server.printUrls();

const shutdown = async (signal) => {
  console.log(`\nNhận ${signal}, đang đóng máy chủ xem trước...`);
  await server.close();
  process.exit(0);
};

process.once("SIGTERM", () => void shutdown("SIGTERM"));
process.once("SIGINT", () => void shutdown("SIGINT"));

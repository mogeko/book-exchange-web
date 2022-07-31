async function initMocks() {
  if (typeof window === "undefined") {
    const { server } = await import("@/lib/mocks/server");
    server.listen();
  } else {
    const { worker } = await import("@/lib/mocks/browser");
    worker.start();
  }
}

initMocks();

export {};

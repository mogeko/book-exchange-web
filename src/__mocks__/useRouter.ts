import * as router from "next/router";

const mock = jest.spyOn(router, "useRouter");

const useRouterMock = {
  target: router.useRouter,
  returnResult: (router: Partial<RouterType> = {}) =>
    mock.mockImplementation(() => genExampleRouter(router)),
  genExampleRouter,
};

function genExampleRouter(router: Partial<RouterType> = {}): RouterType {
  const exampleRes = {
    pathname: "/",
    query: {},
    asPath: "/",
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    route: "/",
    basePath: "/",
    isLocaleDomain: false,
    reload: jest.fn(),
    isFallback: false,
    isReady: true,
    isPreview: false,
  };

  return { ...exampleRes, ...router };
}

type RouterType = ReturnType<typeof router.useRouter>;

export default useRouterMock;

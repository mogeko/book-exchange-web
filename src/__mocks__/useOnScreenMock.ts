import * as hooks from "@/lib/useOnScreen";

const useOnScreenMock = {
  target: hooks.default,
  visiable: () => jest.spyOn(hooks, "default").mockImplementation(() => true),
  not: {
    visiable: () =>
      jest.spyOn(hooks, "default").mockImplementation(() => false),
  },
};

export default useOnScreenMock;

import * as hooks from "@/lib/useOnScreen";

const useOnScreenMock = {
  visiable: () => jest.spyOn(hooks, "default").mockImplementation(() => true),
  not: {
    visiable: () =>
      jest.spyOn(hooks, "default").mockImplementation(() => false),
  },
};

export default useOnScreenMock;

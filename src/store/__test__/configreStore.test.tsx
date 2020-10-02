import configureAppStore from "../configureStore";

describe("configure store", () => {
  it("should initiate with dummy Reducer", () => {
    const store = configureAppStore();
    expect(store.getState()).toEqual({ dummy: ["asdf"] });
  });
});

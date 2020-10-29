import App from "./App";
import { shallow } from "enzyme";
import { APPLICATION_TITLE } from "./constants";

describe("Landing page", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("The title of the application should read Pokemon Application", () => {
    expect(wrapper.find("h1").text()).toContain(APPLICATION_TITLE);
  });

  it("loads a #searchBox element", () => {
    expect(wrapper.find("#searchBox")).toHaveLength(1);
  });

  it("loads a #searchBtn element", () => {
    expect(wrapper.find("#searchBtn").length).toBe(1);
  });

  xit("test", () => {});
});

describe("Landing page interaction with user", () => {
  it("test", () => {});
  it("test", () => {});
  it("test", () => {});
  it("test", () => {});
});

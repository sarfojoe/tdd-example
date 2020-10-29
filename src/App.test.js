import App from "./App";
import { shallow } from "enzyme";

describe("Landing page", () => {
  it("test", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").test()).toContain("Pokemon Application");
  });
});

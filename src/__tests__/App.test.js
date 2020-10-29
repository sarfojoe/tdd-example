import App from "../App";
import { shallow, mount } from "enzyme";
import { APPLICATION_TITLE, SEARCH_BTN_TEXT } from "../constants";

describe("Landing page", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow( < App / > );
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

    it("searchBtn text should read Search", () => {
        const searchBtn = wrapper.find("#searchBtn");
        const searchBtnText = searchBtn.text();
        expect(searchBtnText).toContain(SEARCH_BTN_TEXT);
    });
});

describe("Landing page interaction with user", () => {
    it("searchResult component should have a #result container", () => {
        const wrapper = mount( < App / > );
        const resultContainer = wrapper.find("#result");
        expect(resultContainer).toHaveLength(1);
    });
});
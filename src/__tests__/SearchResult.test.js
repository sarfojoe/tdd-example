import { shallow } from "enzyme";
import SearchResult from "../components/SearchResult";
import { SEARCH_RESULT_PLACEHOLDER } from "../constants";

describe("Search result component", () => {
    it("displays placeholder text before on load", () => {
        const wrapper = shallow( < SearchResult / > );
        expect(wrapper.find("#result").text()).toContain(SEARCH_RESULT_PLACEHOLDER);
    });
});
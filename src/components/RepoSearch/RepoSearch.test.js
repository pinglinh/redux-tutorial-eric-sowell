import React from "react";
import RepoSearch from "./";
import store from "../../store";

import Enzyme, { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("RepoSearch component", () => {
  let wrapper;
  const mockSearchfn = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<RepoSearch store={store} />);
  });

  test("does render", () => {
    expect(wrapper.exists()).toBe(true);
  });
});

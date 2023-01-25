import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { RecoilRoot } from "recoil";

const renderWithRecoil = (ui: ReactElement) => {
  const wrapper = <RecoilRoot>{ui}</RecoilRoot>;

  return render(wrapper);
};

export * from "@testing-library/react";
export { renderWithRecoil };

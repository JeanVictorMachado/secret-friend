import { renderWithRecoil } from "../../utils/setupTests/renderWithRecoil";

import { SettingsPage } from ".";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => {
  return {
    useNavigate: () => mockNavigate,
  };
});

describe("Settings Page", () => {
  it("The page must be render correctly", () => {
    const { container } = renderWithRecoil(<SettingsPage />);

    expect(container).toMatchSnapshot();
  });
});

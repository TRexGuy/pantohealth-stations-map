import { render, screen } from "@testing-library/react";
import StationList from "./StationList";

test("renders station name", () => {
  render(
    <StationList
      stations={[
        {
          id: 1,
          name: "Berlin Hbf",
          city: "Berlin",
          latitude: 52.5,
          longitude: 13.4,
        },
      ]}
      selectedId={null}
      onSelect={() => {}}
    />
  );

  expect(screen.getByText("Berlin Hbf")).toBeTruthy();
});

import { summaryDonations } from "../helpers";

describe("helpers", function () {
  test("`summaryDonations` should calculate donations correctly", function () {
    expect(summaryDonations([1, 2, 3, 4])).toEqual(10);
  });

  test("`summaryDonations` should return 0", function () {
    expect(summaryDonations([])).toEqual(0);
  });
});

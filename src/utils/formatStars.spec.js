import formatStars from "./formatStars";

test("1 star to be 1", () => {
  expect(formatStars(1)).toBe(1);
});

test("999 stars to be 999", () => {
  expect(formatStars(999)).toBe(999);
});

test("1000 stars to be 1K", () => {
  expect(formatStars(1000)).toBe("1K");
});

test("1500 to be 1K", () => {
  expect(formatStars(1500)).toBe("1K");
});

test("9990 stars to be 9K", () => {
  expect(formatStars(9990)).toBe("9K");
});

test("10000 stars to be 10K", () => {
  expect(formatStars(10000)).toBe("10K");
});

test("99999 stars to be 99K", () => {
  expect(formatStars(99999)).toBe("99K");
});

test("1000000 stars to be 1M", () => {
  expect(formatStars(1000000)).toBe("1M");
});

test("2000000 to be 2M", () => {
  expect(formatStars(2000000)).toBe("2M");
});

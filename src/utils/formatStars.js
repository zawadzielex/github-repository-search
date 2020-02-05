export default function formatStars(number) {
  if (number >= 1000000000) {
    return (
      Math.floor(number / 1000000000)
        .toString()
        .replace(/\.0$/, "") + "G"
    );
  }
  if (number >= 1000000) {
    return (
      Math.floor(number / 1000000)
        .toString()
        .replace(/\.0$/, "") + "M"
    );
  }
  if (number >= 1000) {
    return (
      Math.floor(number / 1000)
        .toString()
        .replace(/\.0$/, "") + "K"
    );
  }
  return number;
}

export const formattedDate = (target) =>
  `${target.getFullYear()}-${String(target.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(target.getDate()).padStart(2, "0")}`;

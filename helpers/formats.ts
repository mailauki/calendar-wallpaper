import { DateFormatter } from "@internationalized/date";

export const monthYearFormatter = new DateFormatter("en-US", {
  month: "long",
  year: "numeric",
});
export const dayFormatter = new DateFormatter("en-US", {
  day: "2-digit",
});

import { parseISO } from "date-fns"

export const formatDate = (isoString) => {
  const date = parseISO(isoString)
  return date.toString().slice(0, 15)
}
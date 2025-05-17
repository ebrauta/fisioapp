export function convertDate(date?: string) {
  const today = new Date().toISOString().split('T')[0].split('-').reverse().join('/')
  return date ? date.split('-').reverse().join("/") : today
}
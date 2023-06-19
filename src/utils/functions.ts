export function timeIsInThePast(day:Date, hours:number, minutes:number) {
  const now = new Date();
  const hourVerify = day; 
  hourVerify.setHours(hours, minutes, 0);
  return hourVerify < now;
}
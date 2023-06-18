export function timeIsInThePast(hours:number, minutes:number) {
  const now = new Date();
  const hourVerify = new Date(); 
  hourVerify.setHours(hours, minutes, 0); 
  return hourVerify < now;
}
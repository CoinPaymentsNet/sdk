export function sign(
  method: string,
  url: string,
  clientId: string,
  clientSecret: string,
  payload: string,
): { ts: string; sig: string };

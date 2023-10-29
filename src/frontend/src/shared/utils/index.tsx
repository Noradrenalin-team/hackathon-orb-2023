/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-escape */

function isSecondLevelDomain(url: string) {
  const domain: any = url.match(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/im
  );

  if (domain && domain[1]) {
    const domainParts = domain[1].split(".");
    return domainParts.length === 2;
  } else {
    return false;
  }
}

function checkToken(token: string) {}

export { isSecondLevelDomain, checkToken };

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains.reduce(
    (res, domain) =>
      domain
        .split('.')
        .reduceRight(
          (list, part) =>
            list.concat(`${list.slice(-1)[0] || ''}.${part}`),
          []
        )
        .reduce((res, item) => ({ ...res, [item]: res[item] + 1 || 1 }), res),
    {}
  );
}

module.exports = {
  getDNSStats
};

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam( members ) {
  return Array.isArray(members) && members
    .map(name => name && name.trim && name.trim()[0])
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b))
    .map(name => name[0].toUpperCase())
    .join`` || false
}

module.exports = {
  createDreamTeam
};

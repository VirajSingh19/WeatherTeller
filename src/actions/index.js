export const SEARCH = "SEARCH";

/**
 * @returns action to change section
 * @param {String} section - 'all', 'pending','purchased'
 */
export function searchQuery(query) {
  const action = {
    type: SEARCH,
    query,
  };
  return action;
}

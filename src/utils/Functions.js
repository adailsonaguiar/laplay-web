export const formatUrl = url => {
  return url.split(' ').join('-');
};

export const formatSummary = text => {
  return text.substr(0, text.indexOf('<a href'));
};

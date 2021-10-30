exports.extractUserFromString = (text, delimiter) => {
  const textArray = text.split(delimiter);
  return textArray[textArray.length - 1].trim();
};

exports.extractUrlFromString = (text) => {
  const expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  const regex = new RegExp(expression);
  const match = text.match(regex);
  return match[0].replace(">", ""); // Remove trailing '>' from the original command text
};

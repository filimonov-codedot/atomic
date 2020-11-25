import "./src/scss/styles.scss"

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  return getSavedScrollPosition(location);
};
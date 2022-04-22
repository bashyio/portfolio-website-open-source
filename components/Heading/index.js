import Heading from './Heading';

function H1(props) {
  return <Heading {...props} size={1} />;
}
function H2(props) {
  return <Heading {...props} size={2} />;
}
function H3(props) {
  return <Heading {...props} size={3} />;
}
function H4(props) {
  return <Heading {...props} size={4} />;
}
function H5(props) {
  return <Heading {...props} size={5} />;
}
function H6(props) {
  return <Heading {...props} size={6} />;
}
function BigHeading(props) {
  return <Heading {...props} size="bigHeading" />;
}

export { H1, H2, H3, H4, H5, H6, BigHeading };

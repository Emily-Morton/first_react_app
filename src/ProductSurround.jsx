export default function ProductSurround(props) {
  const styles= {
    padding: "1em",
    border: "3px solid white",
    borderRadius: "1em",
  };
  return <div style={styles}>{props.children}</div>;
}

import Badge from "./Badge";
function ListBadge() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
      }}
    >
      <Badge />
      <Badge />
      <Badge />
    </div>
  );
}

export default ListBadge;
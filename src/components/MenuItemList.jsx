import useGetMenuItems from "../hooks/menuItems/useGetMenuItems";

export default function MenuItemList() {
  const { data, isLoading, error } = useGetMenuItems();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Menu Items</h1>
      <ul>
        {data?.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - ${item.price}
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

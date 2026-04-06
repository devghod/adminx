const AccountIdSettings = ({
  id
}: {
  id: string | string[];
}) => {
  if (!id) return;
  return (
    <div>
      <h1>AccountIdSettings: {id}</h1>
    </div>
  );
}

export default AccountIdSettings;
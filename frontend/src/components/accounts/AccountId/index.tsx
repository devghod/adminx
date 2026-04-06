const AccountId = ({
  id
}: {
  id: string | string[];
}) => {
  if (!id) return;
  return (
    <div>
      <h1>AccountId: {id}</h1>
    </div>
  );
}

export default AccountId;
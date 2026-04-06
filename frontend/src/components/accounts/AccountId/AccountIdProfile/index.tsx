const AccountIdProfile = ({
  id
}: {
  id: string | string[];
}) => {
  if (!id) return;
  return (
    <div>
      <h1>AccountIdProfile: {id}</h1>
    </div>
  );
}

export default AccountIdProfile;
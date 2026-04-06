'use client';

import { useParams } from "next/navigation";
import AccountIdProfile from "@/components/accounts/AccountId/AccountIdProfile";

const AccountIdProfilePage = () => {
  const params = useParams();
  if (!params?.id) return;
  return <AccountIdProfile id={params.id} />
}

export default AccountIdProfilePage;
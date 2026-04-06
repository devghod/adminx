'use client';

import { useParams } from "next/navigation";
import AccountId from "@/components/accounts/AccountId";

const AccountIdPage = () => {
  const params = useParams();
  if (!params?.id) return;
  return <AccountId id={params.id} />
}

export default AccountIdPage;
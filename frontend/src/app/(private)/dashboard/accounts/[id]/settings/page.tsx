'use client';

import { useParams } from "next/navigation";
import AccountIdSettings from "@/components/accounts/AccountId/AccountIdSettings";

const AccountIdSettingsPage = () => {
  const params = useParams();
  if (!params?.id) return;
  return <AccountIdSettings id={params.id} />
}

export default AccountIdSettingsPage;
export function goToTab(router: any, tab: string) {
  router.push(`?tab=${tab}`, undefined, { shallow: true });
}

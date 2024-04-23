import { Layout } from "./_ui/layout";
import { Links } from "./_ui/links";
import { Logo } from "./_ui/logo";

export function AppFooter() {
  return <Layout logo={<Logo />} links={<Links />} />;
}

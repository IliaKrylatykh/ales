import { Card, CardContent } from "@/shared/ui/card";

export function Layout({
  header,
  description,
  socials,
  logo,
}: {
  header: React.ReactNode;
  description: React.ReactNode;
  socials: React.ReactNode;
  logo: React.ReactNode;
}) {
  return (
    <main>
      <Card className="w-full max-w-[600px] m-auto my-12 p-4">
        <CardContent className="space-y-4">
          {header}
          {description}
          {socials}
          {logo}
        </CardContent>
      </Card>
    </main>
  );
}

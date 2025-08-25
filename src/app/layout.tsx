import { NextIntlClientProvider } from "next-intl";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>;
}

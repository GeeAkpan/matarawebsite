// app/[locale]/layout.tsx
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";


// (Optionally) import your routing config to validate locale too

export function generateStaticParams() {
  return [
    { locale: "en" },
    { locale: "fr" },
    { locale: "es" },
    { locale: "nl" },
  ];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  setRequestLocale(locale);

  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      navbar
      {children}
      footer
    </main>
  );
}

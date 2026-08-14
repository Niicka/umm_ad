import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "한국항공대학교 UMC 11기 리크루팅",
  description: "경험보다 끝까지 달릴 사람. 한국항공대학교 UMC 11기 모집 안내",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

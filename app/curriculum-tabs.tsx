"use client";

import { useState } from "react";

type Row = { week: string; title: string; plan: string; design: string; pe: string };
type Track = "plan" | "design" | "pe";

const labels: Record<Track, string> = { plan: "PLAN", design: "DESIGN", pe: "PE" };

export default function CurriculumTabs({ curriculum }: { curriculum: Row[] }) {
  const [selected, setSelected] = useState<Track>("plan");
  return <div className="curriculum-tabs">
    <div className="tab-list" role="tablist">{(Object.keys(labels) as Track[]).map((track) => <button key={track} className={selected === track ? "active" : ""} onClick={() => setSelected(track)} role="tab">{labels[track]}</button>)}</div>
    <div className="curriculum-table">{curriculum.map((row) => <article key={row.week}><div className="week">{row.week}</div><h3>{row.title}</h3><p className="curriculum-description"><b>{labels[selected]}</b>{row[selected]}</p></article>)}</div>
  </div>;
}

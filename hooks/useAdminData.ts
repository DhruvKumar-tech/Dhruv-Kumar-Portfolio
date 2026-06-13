"use client";

import { useEffect, useState } from "react";

export default function useAdminData() {
  const [data, setData] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/admin-data")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setFiltered(res);
      });
  }, []);

  function search(visitorId: string) {
    const result = data.filter((d) =>
      d.visitorId.toLowerCase().includes(visitorId.toLowerCase())
    );
    setFiltered(result);
  }

  return { data, filtered, search };
}
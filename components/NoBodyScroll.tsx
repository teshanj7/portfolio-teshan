"use client";
import { useEffect } from "react";

export function NoBodyScroll() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return null;
}

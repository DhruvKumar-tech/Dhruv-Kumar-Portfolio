"use client";

import React, { useState } from "react";

interface MiniBrowserProps {
  open: boolean;
  title: string;
  headerContent?: React.ReactNode;
  children: React.ReactNode;
  onClose: () => void;
}

export default function MiniBrowser({
  open,
  title,
  headerContent,
  children,
  onClose,
}: MiniBrowserProps): React.JSX.Element | null {
  const [position, setPosition] = useState({
    x: 420,
    y: 80,
  });
  const [panelWidth, setPanelWidth] = useState(860);
  const [panelHeight, setPanelHeight] = useState(560);
  const [fontScale, setFontScale] = useState(1);

  const startResize = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = panelWidth;
    const startHeight = panelHeight;

    const handleMove = (moveEvent: MouseEvent) => {
      const width =
        startWidth + (moveEvent.clientX - startX);
      const height =
        startHeight + (moveEvent.clientY - startY);

      setPanelWidth(
        Math.max(500, Math.min(1100, width))
      );
      setPanelHeight(
        Math.max(
          350,
          Math.min(window.innerHeight * 0.85, height)
        )
      );
    };

    const handleUp = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
  };

  const startDrag = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const startX = e.clientX - position.x;
    const startY = e.clientY - position.y;

    const move = (ev: MouseEvent) => {
      setPosition({
        x: ev.clientX - startX,
        y: ev.clientY - startY,
      });
    };

    const up = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
  };

  if (!open) return null;

  const changeFontScale = (amount: number) => {
    setFontScale((current) =>
      Math.max(0.85, Math.min(1.35, current + amount))
    );
  };

  const browserStyle: React.CSSProperties & {
    "--mini-font-scale": number;
  } = {
    "--mini-font-scale": fontScale,
    position: "fixed",
    top: position.y,
    left: position.x,
    width: `min(${panelWidth}px, calc(100vw - 32px))`,
    height: `min(${panelHeight}px, 85vh)`,
    minWidth: "min(500px, calc(100vw - 32px))",
    maxWidth: "1100px",
    minHeight: "350px",
    maxHeight: "85vh",
    background:
      "linear-gradient(145deg, rgba(18,34,28,0.76), rgba(18,28,42,0.58))",
    backdropFilter: "blur(34px) saturate(150%)",
    WebkitBackdropFilter: "blur(34px) saturate(150%)",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.16)",
    boxShadow:
      "0 30px 90px rgba(0,0,0,0.46), inset 0 1px 0 rgba(255,255,255,0.12)",
    overflow: "hidden",
    zIndex: 9999,
  };

  return (
    <div
      style={browserStyle}
    >
      <div
        onMouseDown={startResize}
        aria-label="Resize window"
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: "25px",
          height: "25px",
          cursor: "nwse-resize",
          color: "#fff",
          opacity: 0.5,
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        ::
      </div>

      <div
        onMouseDown={startDrag}
        style={{
          height: "62px",
          padding: "0 14px 0 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          cursor: "grab",
          background:
            "linear-gradient(90deg, rgba(21,45,30,0.78), rgba(24,48,36,0.62))",
          borderBottom: "none",
        }}
      >
        {headerContent || (
          <h2
            style={{
              margin: 0,
              fontSize: "17px",
              letterSpacing: "0",
              flex: "1 1 auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h2>
        )}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            flex: "0 0 auto",
          }}
        >
          <button
            type="button"
            title="Decrease text size"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => changeFontScale(-0.1)}
            style={{
              border: "none",
              background: "rgba(0,0,0,0.18)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              lineHeight: 1,
            }}
          >
            -
          </button>

          <button
            type="button"
            title="Increase text size"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => changeFontScale(0.1)}
            style={{
              border: "none",
              background: "rgba(0,0,0,0.18)",
              color: "#fff",
              fontSize: "16px",
              cursor: "pointer",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              lineHeight: 1,
            }}
          >
            +
          </button>

          <button
            type="button"
            onMouseDown={(event) => event.stopPropagation()}
            onClick={onClose}
            style={{
              border: "none",
              background: "rgba(0,0,0,0.22)",
              color: "#fff",
              fontSize: "18px",
              cursor: "pointer",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
            }}
          >
            x
          </button>
        </div>
      </div>

      <div
        style={{
          padding: "16px 20px 20px",
          height: "calc(100% - 62px)",
          boxSizing: "border-box",
          overflowY: "auto",
          color: "#fff",
        }}
      >
        {children}
      </div>
    </div>
  );
}

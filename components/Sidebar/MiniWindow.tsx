"use client";

import React from "react";
import MiniBrowser from "./MiniBrowser";
import { NOTEBOOKS } from "./NotebookContent";

export type NotebookKey = keyof typeof NOTEBOOKS;

interface MiniWindowProps {
  openNotebooks: NotebookKey[];
  activeNotebook: NotebookKey | null;
  onSelect: (notebook: NotebookKey) => void;
  onCloseNotebook: (notebook: NotebookKey) => void;
  onClose: () => void;
}

export default function MiniWindow({
  openNotebooks,
  activeNotebook,
  onSelect,
  onCloseNotebook,
  onClose,
}: MiniWindowProps): React.JSX.Element | null {
  if (openNotebooks.length === 0 || !activeNotebook) {
    return null;
  }

  return (
    <MiniBrowser
      open
      title={NOTEBOOKS[activeNotebook].title}
      headerContent={
        <div
          style={{
            flex: "1 1 auto",
            minWidth: 0,
            display: "flex",
            alignItems: "flex-end",
            gap: "4px",
            height: "100%",
            overflowX: "auto",
            paddingTop: "8px",
          }}
        >
          {openNotebooks.map((key) => {
            const notebook = NOTEBOOKS[key];
            const isActive = key === activeNotebook;

            return (
              <div
                key={key}
                style={{
                  flex: "0 1 176px",
                  minWidth: "112px",
                  maxWidth: "190px",
                  height: "46px",
                  position: "relative",
                  display: "flex",
                  alignItems: "flex-end",
                }}
              >
                {isActive && (
                  <>
                    <span
                      style={{
                        position: "absolute",
                        left: "-12px",
                        bottom: 0,
                        width: "12px",
                        height: "12px",
                        borderBottomRightRadius: "12px",
                        boxShadow:
                          "6px 6px 0 rgba(255,255,255,0.085)",
                        pointerEvents: "none",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "-12px",
                        bottom: 0,
                        width: "12px",
                        height: "12px",
                        borderBottomLeftRadius: "12px",
                        boxShadow:
                          "-6px 6px 0 rgba(255,255,255,0.085)",
                        pointerEvents: "none",
                      }}
                    />
                  </>
                )}

                <button
                  type="button"
                  onMouseDown={(event) => event.stopPropagation()}
                  onClick={() => onSelect(key)}
                  style={{
                  width: "100%",
                  height: isActive ? "46px" : "36px",
                  padding: "0 9px 0 14px",
                  marginBottom: isActive ? "-1px" : "5px",
                  border: "none",
                  borderRadius: isActive
                    ? "14px 14px 0 0"
                    : "12px",
                  background: isActive
                    ? "linear-gradient(180deg, rgba(255,255,255,0.16), rgba(255,255,255,0.085))"
                    : "rgba(255,255,255,0.065)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  minInlineSize: 0,
                  boxShadow: isActive
                    ? "0 -6px 24px rgba(255,255,255,0.05)"
                    : "none",
                  backdropFilter: "blur(18px)",
                }}
              >
                <span
                  style={{
                    flex: "1 1 auto",
                    minWidth: 0,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    fontSize:
                      "calc(12px * var(--mini-font-scale, 1))",
                    fontWeight: 700,
                    textAlign: "left",
                  }}
                >
                  {notebook.title}
                </span>

                <span
                  onClick={(event) => {
                    event.stopPropagation();
                    onCloseNotebook(key);
                  }}
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: isActive
                      ? "rgba(0,0,0,0.28)"
                      : "rgba(0,0,0,0.18)",
                    color: "#e5e7eb",
                    flex: "0 0 auto",
                    fontSize: "13px",
                    lineHeight: 1,
                  }}
                >
                  x
                </span>
              </button>
              </div>
            );
          })}
        </div>
      }
      onClose={onClose}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: 0,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "14px",
            overflowY: "auto",
            padding: "2px 0 0",
            borderRadius: 0,
            border: "none",
            background: "transparent",
            boxShadow: "none",
            minHeight: 0,
          }}
        >
          {NOTEBOOKS[activeNotebook].content.map((item) => (
            <article
              key={item.name}
              style={{
                minHeight: "150px",
                minWidth: 0,
                padding: "18px",
                borderRadius: "14px",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.05))",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,255,255,0.12), 0 18px 36px rgba(0,0,0,0.18)",
                backdropFilter: "blur(18px)",
              }}
            >
              <h3
                style={{
                  margin: "0 0 8px",
                  fontSize:
                    "calc(16px * var(--mini-font-scale, 1))",
                  color: "#ffffff",
                  overflowWrap: "anywhere",
                }}
              >
                {item.name}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "#dbeafe",
                  fontSize:
                    "calc(13px * var(--mini-font-scale, 1))",
                  lineHeight: 1.6,
                  overflowWrap: "anywhere",
                }}
              >
                {item.description}
              </p>

              {"tech" in item && item.tech && (
                <p
                  style={{
                    margin: "12px 0 0",
                    color: "#bfdbfe",
                    fontSize:
                      "calc(12px * var(--mini-font-scale, 1))",
                    fontWeight: 700,
                    overflowWrap: "anywhere",
                  }}
                >
                  {item.tech}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </MiniBrowser>
  );
}

"use client";
import { useState, FormEvent, FocusEvent, MouseEvent } from "react";

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  // Bug Fix: Swapped individual credentials for token tracking state
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulated API response delay
    await new Promise((r) => setTimeout(r, 900));

    // PLACE YOUR SECRET TOKEN VALUATION HERE
    const EXPECTED_TOKEN = "YOUR_TOKEN_HERE";

    if (token.trim() === EXPECTED_TOKEN) {
      localStorage.setItem("admin_token", token);
      setSuccess(true);
    } else {
      setError("Invalid administrative token payload.");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setSuccess(false);
    setToken("");
  };

  // Helper styling handlers typed for TS
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "rgba(139,92,246,0.6)";
    e.target.style.boxShadow = "0 0 0 2px rgba(139,92,246,0.12)";
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.target.style.borderColor = "rgba(99,102,241,0.2)";
    e.target.style.boxShadow = "none";
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: isOpen ? "288px" : "0px",
        width: isOpen ? "240px" : "0px",
        height: "100vh",
        zIndex: 999,
        background: "linear-gradient(180deg, #0d0d1e 0%, #0f0f1a 100%)",
        borderRight: isOpen ? "1px solid rgba(139,92,246,0.2)" : "none",
        overflow: "hidden",
        transition: "left 0.35s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 20px 16px",
          borderBottom: "1px solid rgba(139,92,246,0.15)",
          background: "rgba(139,92,246,0.05)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "16px" }}>🔐</span>
            <h3 style={{ margin: 0, fontSize: "14px", fontWeight: 700, color: "#e2e8f0" }}>
              Admin Portal
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "#475569",
              cursor: "pointer",
              fontSize: "16px",
              lineHeight: 1,
              padding: "2px 4px",
            }}
          >
            ×
          </button>
        </div>
        <p style={{ margin: 0, fontSize: "10px", color: "#475569", letterSpacing: "0.5px" }}>
          Restricted access
        </p>
      </div>

      {/* Content Container */}
      <div style={{ padding: "20px", flex: 1, overflow: "auto" }}>
        {success ? (
          <div style={{ textAlign: "center", paddingTop: "20px" }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>✓</div>
            <p style={{ color: "#34d399", fontSize: "13px", fontWeight: 600, margin: "0 0 4px" }}>
              Welcome back!
            </p>
            <p style={{ color: "#475569", fontSize: "11px", margin: "0 0 20px" }}>
              Logged in successfully via token.
            </p>
            <button onClick={handleLogout} style={btnStyle}>
              Log out
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <label style={labelStyle}>Token Access String</label>
              <input
                type="text"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                placeholder="Paste session token here"
                required
                style={inputStyle}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>

            {error && (
              <p style={{ margin: 0, fontSize: "11px", color: "#f87171", background: "rgba(248,113,113,0.08)", padding: "8px 10px", borderRadius: "6px", border: "1px solid rgba(248,113,113,0.2)" }}>
                {error}
              </p>
            )}

            <button type="submit" disabled={loading} style={{ ...btnStyle, opacity: loading ? 0.7 : 1 }}>
              {loading ? "Authorizing Token…" : "Sign In"}
            </button>

            <p style={{ margin: 0, fontSize: "10px", color: "#334155", textAlign: "center" }}>
              Protected admin area
            </p>
          </form>
        )}

        {/* Divider & Protected Quick Links Map */}
        <div style={{ marginTop: "24px", paddingTop: "20px", borderTop: "1px solid rgba(99,102,241,0.1)" }}>
          <p style={{ ...labelStyle, marginBottom: "12px" }}>Quick Links</p>
          {[
            { label: "Dashboard", icon: "◈", href: "/admin" },
            { label: "Manage Projects", icon: "◆", href: "/admin/projects" },
            { label: "Edit Content", icon: "✎", href: "/admin/content" },
            { label: "Analytics", icon: "◎", href: "/admin/analytics" },
          ].map((link) => {
            // Bug Fix: Block link usage if user is unauthenticated
            const isClickable = success;

            return (
              <a
                key={link.label}
                href={isClickable ? link.href : undefined}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  if (!isClickable) e.preventDefault();
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 10px",
                  marginBottom: "4px",
                  borderRadius: "6px",
                  color: isClickable ? "#94a3b8" : "#2d3748",
                  textDecoration: "none",
                  fontSize: "12px",
                  cursor: isClickable ? "pointer" : "not-allowed",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e: MouseEvent<HTMLAnchorElement>) => {
                  if (isClickable) {
                    e.currentTarget.style.background = "rgba(99,102,241,0.1)";
                    e.currentTarget.style.color = "#fff";
                  }
                }}
                onMouseLeave={(e: MouseEvent<HTMLAnchorElement>) => {
                  if (isClickable) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#94a3b8";
                  }
                }}
              >
                <span style={{ fontSize: "11px" }}>{link.icon}</span>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: 600,
  letterSpacing: "1px",
  textTransform: "uppercase",
  color: "#475569",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  borderRadius: "7px",
  border: "1px solid rgba(99,102,241,0.2)",
  background: "rgba(255,255,255,0.03)",
  color: "#e2e8f0",
  fontSize: "12px",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.2s, box-shadow 0.2s",
  fontFamily: "inherit",
};

const btnStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px",
  borderRadius: "7px",
  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
  border: "none",
  color: "#fff",
  fontSize: "13px",
  fontWeight: 600,
  cursor: "pointer",
  letterSpacing: "0.3px",
  transition: "opacity 0.2s",
};

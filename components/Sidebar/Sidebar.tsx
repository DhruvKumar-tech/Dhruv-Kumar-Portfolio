"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";



// Define strict interfaces for TypeScript validation

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}


const SKILLS = [
  "Python",
  "SQL",
  "Power BI",
  "Tableau",
  "Machine Learning",
  "NLP",
  "GenAI",
  "AWS",
  "Pandas",
  "Scikit-Learn",
];

const SOCIALS: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/DhruvKumar-tech",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Sidebar() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const toggleSidebar = () => {
      setIsOpen((prev) => !prev);
    };

    window.addEventListener(
      "toggle-sidebar",
      toggleSidebar
    );

    return () => {
      window.removeEventListener(
        "toggle-sidebar",
        toggleSidebar
      );
    };
  }, []);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);
  

  function StatCard({
    value,
    label,
  }: {
    value: string;
    label: string;
  }) {
    return (
      <div
        style={{
          padding: "10px",
          borderRadius: "10px",
          background:
            "rgba(0,0,0,0.45)",
          border:
            "1px solid rgba(99,102,241,0.15)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            color: "#94a3b8",
          }}
        >
          {value}
        </div>

        <div
          style={{
            fontSize: "10px",
            color: "#94a3b8",
          }}
        >
          {label}
        </div>
      </div>
    );
  }

  return (
    <>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          onClick={() => { setIsOpen(false); setAdminOpen(false); }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 998,
            background: "rgba(0,0,0,0.45)",
            backdropFilter: "blur(2px)",
          }}
        />
      )}

      {/* ── Main Sidebar ── */}
      <aside
        style={{
          position: "fixed",
          top: 0,
          left: isOpen ? 0 : "-288px",
          width: "288px",
          height: "100vh",
          zIndex: 999,
          background: `
          linear-gradient(
            180deg,
            rgba(00,00,00,0.92) 0%,
            rgba(00,00,00,0.88) 50%,
            rgba(00,00,00,0.95) 100%
          )`,
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: "0 0 50px rgba(99,102,241,0.18)",
          borderRight: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          transition: "left 0.35s cubic-bezier(0.4,0,0.2,1)",
          overflowY: "auto",
          overflowX: "hidden",
          
        }}
      >
        {/* Profile Section */}
        <div
          style={{
            padding: "32px 24px",
            background:
              "linear-gradient(180deg, rgba(99,102,241,.18), rgba(99,102,241,.03))",
            backdropFilter: "blur(20px)",
            borderBottom:
              "1px solid rgba(255,255,255,.08)",
            position: "relative",
            overflow: "visible",
            
          }}
        >

          <div
            style={{
              position: "absolute",
              width: "180px",
              height: "180px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(99,102,241,.4), transparent)",
              top: "-60px",
              left: "50%",
              transform: "translateX(-50%)",
              filter: "blur(30px)",
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          {/* Profile Photo */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              margin: "0 auto 12px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              padding: "2px",
              boxShadow: "0 0 24px rgba(99,102,241,0.4)",
              animation: "pulse 4s infinite ease-in-out",
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#1a1a2e",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Dhruv Kumar"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:32px;color:#6366f1">DK</div>`;
                  }
                }}
              />
            </div>
          </div>

          <h2
            style={{
              marginTop: "20px",
              marginBottom: "8px",
              fontSize: "30px",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "-0.5px",
              
            }}
          >
            Dhruv Kumar
          </h2>
          <p
            style={{
              marginBottom: "24px",
              color: "#60a5fa",
              fontWeight: 600,
              letterSpacing: "2px",
              fontSize: "12px",
            }}
          >
            DATA ANALYST • GENAI • ML
          </p>

          <p
            style={{
              margin: 0,
              fontSize: "11px",
              color: "#94a3b8",
              lineHeight: 1.6,
            }}
          >
            Building AI-powered analytics,
            dashboards, NLP systems and
            machine learning applications.
          </p>

          {/* Social Links */}
          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "14px" }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(99,102,241,0.1)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f8fafc",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        
        </div>

        {/* Resume-style Quick Info */}
        <div style={{ padding: "32px 24px",borderBottom: "1px solid rgba(99,102,241,0.12)" }}>
          <p style={labelStyle}>Professional Profile</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            
            <InfoRow
              icon="📧"
              label="Email"
              value="dhruvkumar010200@gmail.com"
            />

            <InfoRow
              icon="🎓"
              label="Education"
              value="MBA Data Science"
            />

            <InfoRow
              icon="🤖"
              label="Specialization"
              value="AI & Analytics"
            />

            <InfoRow
              icon="📍"
              label="Location"
              value="Gurgaon"
            />

            <InfoRow
              icon="🟢"
              label="Availability"
              value="Open to Work"
            />
          </div>
        </div>
        
        <div
          style={{padding: "32px 24px",
            borderBottom:
              "1px solid rgba(99,102,241,0.12)",
          }}
        >
          <p style={labelStyle}>
            Highlights
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(2,1fr)",
              gap: "8px",
            }}
          >
            <StatCard
              value="3+"
              label="Years Exp"
            />

            <StatCard
              value="10+"
              label="Projects"
            />

            <StatCard
              value="2"
              label="Degrees"
            />

            <StatCard
              value="AI"
              label="Focus"
            />
          </div>
        </div>

        {/* Skills */}
        <div style={{padding: "32px 24px", borderBottom: "1px solid rgba(99,102,241,0.12)" }}>
          <p style={labelStyle}>Core Skills</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {SKILLS.map((skill) => (
              <span
                key={skill}
                style={{
                  fontSize: "10px",
                  padding: "6px 10px",
                  borderRadius: "4px",
                  background:"rgba(255,255,255,.05)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  color: "#94a3b8",
                  fontWeight: 500,
                  letterSpacing: "0.3px",
                  boxShadow:"inset 0 0 0 1px rgba(255,255,255,.06)"
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>


        {/* Admin Login Button at bottom */}
        <div style={{padding: "32px 24px", borderTop: "1px solid rgba(99,102,241,0.12)" }}>
          <div style={{ borderTop: "1px solid rgba(99,102,241,0.12)" }}>
            <button
              onClick={() => {
                // Opens the admin login portal in a separate browser tab
                window.open("/admin-login", "_blank"); 
              }}
              // 2. Update hover state when mouse enters or leaves the button area
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: "8px",
                // 3. Dynamic Background: Highlights with a gradient on hover, falls back to subtle transparent indigo
                background: isHovered 
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)" 
                  : "rgba(99,102,241,0.1)",
                // 4. Dynamic Border: Solidifies and brightens on hover
                border: isHovered
                  ? "1px solid rgba(139, 92, 246, 0.6)"
                  : "1px solid rgba(99, 102, 241, 0.3)",
                // 5. Dynamic Text Color: Turns crisp white on hover
                color: isHovered ? "#fff" : "#a5b4fc",
                fontSize: "13px",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                // 6. Dynamic Shadow: Gives a glowing lift effect on hover
                boxShadow: isHovered 
                ? "0 4px 12px rgba(99, 102, 241, 0.25)" 
                  : "none",
                // Smoothly animates all style changes over 0.2 seconds
                transition: "all 0.2s ease-in-out",
                letterSpacing: "0.3px",
              }}
            >
              <span>⚙</span>
              Admin Login
            </button>
          </div>        
        </div>
      </aside>
    </>
  );
}

// ── Sub-components & Type Rules ──

interface InfoRowProps {
  icon: string;
  label: string;
  value: string;
  valueColor?: string;
}

function InfoRow({ icon, label, value, valueColor }: InfoRowProps): React.JSX.Element {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <span style={{ fontSize: "12px", width: "16px", textAlign: "center" }}>{icon}</span>
      <span style={{ fontSize: "11px", color: "#475569", minWidth: "52px" }}>{label}</span>
      <span style={{ fontSize: "11px", color: valueColor || "#94a3b8", fontWeight: 500, flex: 1 }}>
        {value}
      </span>
    </div>
  );
}

const labelStyle = {
  fontSize: "11px",
  fontWeight: 700,
  color: "#cbd5e1",
  letterSpacing: "3px",
  textTransform: "uppercase",
  marginBottom: "16px",
  background:"rgba(255,255,255,.05)",

};
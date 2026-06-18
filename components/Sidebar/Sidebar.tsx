"use client";

import React, { useState, useEffect } from "react";
import MiniWindow, { type NotebookKey } from "./MiniWindow";


// Define strict interfaces for TypeScript validation

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  valueColor?: string;
}

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


const HIGHLIGHTS: { id: NotebookKey; title: string }[] = [
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "aifocus",
    title: "AI Focus",
  },
  {
    id: "dashboards",
    title: "Dashboards",
  },
];

function InfoRow({ icon, label, value, valueColor }: InfoRowProps): React.JSX.Element {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "22px minmax(82px, 0.45fr) minmax(0, 1fr)",
          alignItems: "center",
          gap: "10px",
          padding: "10px 0",
          
        }}
      >
        <span style={{ fontSize: "12px", width: "22px", textAlign: "center", color: "#f8fafc" }}>{icon}</span>
        <span style={{ fontSize: "10px", color: "#a3a3a3", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase" }}>{label}</span>
        <span style={{ fontSize: "12px", color: valueColor || "#ffffff", fontWeight: 600, lineHeight: 1.45, minWidth: 0, overflowWrap: "anywhere" }}>
          {value}
        </span>
      </div>
      
    );
}

export default function Sidebar() {
  const [openNotebooks, setOpenNotebooks] =
    useState<NotebookKey[]>([]);
  const [activeNotebook, setActiveNotebook] =
    useState<NotebookKey | null>(null);
  const theme = "dark";

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  const [activeCard, setActiveCard] =
  useState<string | null>(null);
  const sidebarWidth = 450;
  const [isHovered, setIsHovered] = useState<boolean>(false);
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

  const toggleNotebook = (notebook: NotebookKey) => {
    if (openNotebooks.includes(notebook)) {
      closeNotebook(notebook);
      return;
    }

    setOpenNotebooks((current) => [...current, notebook]);
    setActiveNotebook(notebook);
  };

  const closeNotebook = (notebook: NotebookKey) => {
    setOpenNotebooks((current) => {
      const next = current.filter((item) => item !== notebook);

      if (activeNotebook === notebook) {
        setActiveNotebook(next[next.length - 1] || null);
      }

      return next;
    });
  };

  const closeAllNotebooks = () => {
    setOpenNotebooks([]);
    setActiveNotebook(null);
  };

  return (
    <>

      {/* ── Backdrop ── */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
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
          left: isOpen? 0  : `-${sidebarWidth}px`,
          width: `${sidebarWidth}px`,
          height: "100vh",
          zIndex: 999,
          background: `
          linear-gradient(
            180deg,
            rgba(70,40,00,0.4) 0%,
            rgba(50,0,00,0.55) 35%,
            rgba(20,00,00,0.97) 100%
          )
          `,
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          boxShadow: "0 0 40px rgba(59,130,246,0.12)",
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
            margin: "18px",
            padding: "20px",
            borderRadius: "24px",
            textAlign: "center",
            background:
              "rgba(255,255,255,0.04)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Profile Photo */}
          <div
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              margin: "0 auto 18px",
              background:
                "linear-gradient(135deg,#60a5fa,#ffffff,#8b5cf6)",
              padding: "3px",
              boxShadow:
                "0 0 30px rgba(99,102,241,0.45)",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "#000",
              }}
            >
              <img
                src="/profile.jpg"
                alt="Dhruv Kumar"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";

                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div
                        style="
                          width:100%;
                          height:100%;
                          display:flex;
                          align-items:center;
                          justify-content:center;
                          color:white;
                          font-size:36px;
                          font-weight:700;
                        "
                      >
                        DK
                      </div>
                    `;
                  }
                }}
              />
            </div>
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.5px",
              textShadow:
                "0 0 15px rgba(255,255,255,0.15)",
            }}
          >
            Dhruv Kumar
          </h2>

          <p
            style={{
              marginTop: "8px",
              marginBottom: "14px",
              fontSize: "12px",
              color: "#60a5fa",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
            }}
          >
            Data Analyst • AI Engineer
          </p>

          <p
            style={{
              maxWidth: "280px",
              margin: "0 auto",
              fontSize: "13px",
              color: "#d1d5db",
              lineHeight: 1.7,
            }}
          >
            Transforming data into business insights
            through Analytics, Machine Learning,
            NLP and AI-powered solutions.
          </p>


          {/* Social Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginTop: "22px",
            }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "12px",
                  background:
                    "rgba(255,255,255,0.06)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "all .3s ease",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Resume-style Quick Info */}
        <div style={{ margin: "18px",
            padding: "20px",background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",        
        borderRadius:"16px",borderBottom: "1px solid rgba(99,102,241,0.12)" }}>
          <div style={labelStyle}>
            Professional Profile

            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "60px",
                height: "2px",
                borderRadius: "999px",
                background:
                  "linear-gradient(90deg,#ffffff,#6b7280)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            
            <InfoRow
              icon={<svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              >
              <path d="M4 4h16v16H4z"/>
              <path d="M4 7l8 6 8-6"/>
              </svg>
              }
              label="Email"
              value="dhruvkumar010200@gmail.com"
            />

            <InfoRow
              icon={
              <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              >
              <path d="M2 8l10-5 10 5-10 5z"/>
              <path d="M6 10v4c0 2 3 4 6 4s6-2 6-4v-4"/>
              </svg>
              }
              label="Education"
              value="MBA Data Science"
            />

            <InfoRow
              icon={
              <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              >
              <path d="M12 2a5 5 0 00-5 5v1a4 4 0 00-2 3.5A4.5 4.5 0 009 16v2h6v-2a4.5 4.5 0 004-4.5A4 4 0 0017 8V7a5 5 0 00-5-5z"/>
              </svg>
              }
              label="Specialization"
              value="AI & Analytics"
            />

            <InfoRow
              icon={
              <svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              >
              <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z"/>
              <circle cx="12" cy="10" r="2"/>
              </svg>
              }
              label="Location"
              value="Gurgaon"
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

          {/* Highlights Slider */}
          
          <div
            style={{
              marginTop: "24px",
            }}
          >
            <div
              style={{
                
                display: "flex",
                overflowX: "auto",
                gap: "14px",
                scrollSnapType: "x mandatory",
                paddingBottom: "8px",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {HIGHLIGHTS.map((item) => (
                <button
                              key={item.id}
                  type="button"
                  title="Click to open or close"
                  onClick={() => toggleNotebook(item.id)}
                  
                  style={{
                    padding: "12px",
                    borderRadius: "12px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: openNotebooks.includes(item.id)
                      ? "rgba(255,255,255,0.14)"
                      : "rgba(0,00,0,0.04)",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 600,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.background =
                      "linear-gradient(135deg,#ff12f0,#8b5cf6)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.background =
                      openNotebooks.includes(item.id)
                        ? "rgba(255,255,255,0.14)"
                        : "rgba(255,255,255,0.04)";
                  }}
                >
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      opacity: 0.6,
                      marginTop: "4px",
                    }}
                  >
                  
                  </div>
                </button>
              ))}
            </div>
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
                  ? "linear-gradient(135deg, #fffbbb, #8b5cf6)" 
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
        {activeCard && (
        <div
          onClick={() =>
            setActiveCard(null)
          }
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1500,
            background:
              "rgba(0,0,0,0.55)",
            backdropFilter:
              "blur(10px)",
          }}
        >
          <div
            onClick={(e) =>
              e.stopPropagation()
            }
            style={{
              position: "absolute",
              right: 50,
              top: 50,
              width: 700,
              height: "85vh",
              borderRadius: 24,

              background:
                "#f8f8f8",

              color: "#111",

              overflowY: "auto",

              boxShadow:
                "0 40px 80px rgba(0,0,0,.5)",

              border:
                "1px solid rgba(0,0,0,.1)",
            }}
          >
          </div>
        </div>
      )}
      </aside>
      <MiniWindow
        openNotebooks={openNotebooks}
        activeNotebook={activeNotebook}
        onSelect={setActiveNotebook}
        onCloseNotebook={closeNotebook}
        onClose={closeAllNotebooks}
      />
    </>
  );
}

// ── Sub-components & Type Rules ──

const  labelStyle= {
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: "4px",
  textTransform: "uppercase" as const,
  color: "#ffffff",
  marginBottom: "18px",
  position: "relative" as const,
  paddingBottom: "10px",
};

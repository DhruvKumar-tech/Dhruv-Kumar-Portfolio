"use client";

interface Props {
  active: string | null;
  onClose: () => void;
}

export default function NotebookModal({ active, onClose }: Props) {
  if (!active) return null;

  const content: Record<
    string,
    {
      title: string;
      body: string;
    }
  > = {
    projects: {
      title: "Projects",
      body:
        "Portfolio projects including AI, Analytics, Power BI dashboards, NLP systems, Movie Recommender, Resume Analyzer and Property Analytics.",
    },

    experience: {
      title: "Experience",
      body:
        "Hands-on experience in analytics, machine learning, dashboard development and AI-powered business solutions.",
    },

    education: {
      title: "Education",
      body:
        "MBA Data Science with specialization in Analytics, AI and Business Intelligence.",
    },

    ai: {
      title: "AI Focus",
      body:
        "GenAI, NLP, Machine Learning pipelines, recommendation systems, chatbot architecture and automation.",
    },

    dashboards: {
      title: "Dashboards",
      body:
        "Power BI dashboards, KPI monitoring systems, visitor analytics and business intelligence reporting.",
    },
  };

  const data = content[active];

  if (!data) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000,
        background: "rgba(0,0,0,.55)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "absolute",
          right: 40,
          top: 40,
          width: 700,
          maxWidth: "90vw",
          height: "80vh",
          background: "#fafafa",
          color: "#111",
          borderRadius: 20,
          overflowY: "auto",
          boxShadow: "0 30px 80px rgba(0,0,0,.4)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            padding: "24px",
            borderBottom: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h2>{data.title}</h2>

          <button
            onClick={onClose}
            style={{
              fontSize: "18px",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <div
          style={{
            padding: "28px",
            lineHeight: 1.8,
          }}
        >
          {data.body}
        </div>
      </div>
    </div>
  );
}
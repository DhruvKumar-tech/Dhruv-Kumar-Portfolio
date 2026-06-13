export default function KPICards({
  visitors,
  uniqueVisitors,
  feedbacks,
  countries,
}: any) {
  const cards = [
    {
      title: "Visitors",
      value: visitors,
    },
    {
      title: "Unique",
      value: uniqueVisitors,
    },
    {
      title: "Feedback",
      value: feedbacks,
    },
    {
      title: "Countries",
      value: countries,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
        >
          <p className="text-zinc-500">
            {card.title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}
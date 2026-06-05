export async function trackEvent(event: string) {
try {
await fetch("/api/track", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({
event,
}),
});
} catch (error) {
console.error(error);
}
}

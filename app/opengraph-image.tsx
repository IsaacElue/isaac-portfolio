// app/opengraph-image.tsx
import { ImageResponse } from "next/og"
export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"


export default async function Image() {
return new ImageResponse(
(
<div
style={{
height: "100%",
width: "100%",
display: "flex",
flexDirection: "column",
justifyContent: "center",
padding: 80,
background: "#0a0a0a",
color: "white",
fontSize: 64,
}}
>
<div style={{ opacity: 0.6, fontSize: 28 }}>isaacelue.dev</div>
<div style={{ fontWeight: 700 }}>Portfolio</div>
</div>
),
{ ...size }
)
}
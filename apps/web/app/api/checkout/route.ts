import Stripe from "stripe";

export async function POST() {
  const key = process.env.STRIPE_SECRET_KEY;
  const price = process.env.STRIPE_PRICE_BASIC;
  const success = process.env.STRIPE_SUCCESS_URL || "http://localhost:3000/success";
  const cancel = process.env.STRIPE_CANCEL_URL || "http://localhost:3000/cancel";

  if (!key) return Response.json({ error: "STRIPE_SECRET_KEY not set" }, { status: 500 });
  if (!price) return Response.json({ error: "STRIPE_PRICE_BASIC not set" }, { status: 500 });

  const stripe = new Stripe(key, { apiVersion: "2024-06-20" } as any);
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{ price, quantity: 1 }],
      success_url: success,
      cancel_url: cancel
    });
    return Response.json({ url: session.url });
  } catch (e: any) {
    return Response.json({ error: e?.message || "stripe error" }, { status: 500 });
  }
}

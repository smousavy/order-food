import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://kvbmsqxhfbgkllamshdx.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2Ym1zcXhoZmJna2xsYW1zaGR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MTg2ODcsImV4cCI6MjA1NTE5NDY4N30.I9BcC6gqq_6b6Ve4CGDv0A3z-IQ_IUZcxnTdeVS55iI"
);
const API_URL = "/data.json";

export async function getMenu() {
  const res = await fetch(`${API_URL}`);
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data.menus;
}

export async function getOrder(id) {
  let { data, error } = await supabase.from("order").select().eq("id", id);
  if (error) throw Error("Failed getting order");
  return data;
}
export async function createOrder(newOrder, cart) {
  try {
    const { data } = await supabase.from("order").insert([newOrder]).select();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
export async function createOrderDetail(cart) {
  try {
    const { data } = await supabase
      .from("orderdetail")
      .insert([...cart])
      .select();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}
export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}

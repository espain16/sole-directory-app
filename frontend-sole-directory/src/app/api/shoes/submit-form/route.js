export async function POST(request) {
  try {
    const shoeData = await request.json();
    console.log("Received shoe data:", shoeData); // This will log the shoeName, shoeColor, and quantity

    return new Response(
      JSON.stringify({
        message: "Success!",
        data: shoeData,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Something went wrong!" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

import { NextResponse } from 'next/server';

const SEARCH_API_URL = 'https://api.example.com/data';

export async function GET(request) {
  try {
    // Make a request to the external API
    const response = await fetch(SEARCH_API_URL);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the response
    const data = await response.json();

    // Return the data to the client
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Make a request to the external API
    const response = await fetch(SEARCH_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the response
    const data = await response.json();

    // Return the data to the client
    return NextResponse.json(data);
  } catch (error) {
    // Handle errors
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

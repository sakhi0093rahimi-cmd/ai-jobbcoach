import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const form = await req.json();

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: `
Du är en professionell svensk CV-skribent.

Förbättra CV:t på svenska. Skriv kort, tydligt och professionellt.
Returnera endast JSON, inget annat.

Format:
{
  "profile": "",
  "experience": "",
  "education": "",
  "skills": "",
  "languages": "",
  "hobbies": ""
}

CV-data:
Namn: ${form.name}
Jobbtitel: ${form.role}
Profil: ${form.profile}
Erfarenhet: ${form.experience}
Utbildning: ${form.education}
Färdigheter: ${form.skills}
Språk: ${form.languages}
Hobbys: ${form.hobbies}
`,
    });

    const text = response.output_text;
    const cleaned = text.replace(/```json|```/g, "").trim();
    const data = JSON.parse(cleaned);

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Kunde inte skapa CV med AI." },
      { status: 500 }
    );
  }
}
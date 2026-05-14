import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { name, role, experience, skills, jobAd } = await req.json();

    if (!name || !role || !experience || !jobAd) {
      return NextResponse.json(
        { error: "Fyll i namn, jobbtitel, erfarenhet och jobbannons." },
        { status: 400 }
      );
    }

    const response = await client.responses.create({
      model: "gpt-5.2",
      instructions:
        "Du är en professionell svensk jobbcoach. Skriv tydliga, naturliga och seriösa personliga brev på svenska. Hitta inte på falsk erfarenhet. Använd en varm men professionell ton.",
      input: `
Skriv ett personligt brev på svenska.

Kandidat:
Namn: ${name}
Söker roll: ${role}
Erfarenhet: ${experience}
Kompetenser: ${skills || "Ej angivet"}

Jobbannons:
${jobAd}

Krav:
- Max 350 ord
- Anpassa brevet till jobbannonsen
- Låt det låta mänskligt, inte robotaktigt
- Avsluta med en stark men enkel avslutning
`,
    });

    return NextResponse.json({ letter: response.output_text });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Kunde inte skapa brevet. Kontrollera din API-nyckel." },
      { status: 500 }
    );
  }
}

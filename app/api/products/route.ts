import { NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const data = await prisma.products.findMany();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newItem = await prisma.products.create({
      data: {
        name: body.name,
        description: body.description,
        price: parseInt(body.price),
      },
    });
    return NextResponse.json(newItem);
  } catch (error) {
    if (error instanceof Error) {
      if (error.name === "PrismaClientValidationError") {
        return NextResponse.json(
          { error: "Invalid data provided" },
          { status: 400 },
        );
      }
    }
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 },
    );
  }
}
